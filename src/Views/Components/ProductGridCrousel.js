import React, { useEffect, useState } from 'react'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/grid";

import "../../Styles/crousel.css";
import { Swiper, SwiperSlide } from "swiper/react";

import {
    Autoplay,
    Pagination,
    Navigation,
    Mousewheel,
    Grid,
} from "swiper/modules";
import { allProduct } from '../../Utils/CustomList';
import Product from './ProductCrousalItem';
import { useSelector } from "react-redux"

const ProductGridCrousel = () => {
    const tab1 = useSelector((state) => state.DashboardReducer.tabHeaderState);
    const [product, setProduct] = useState([]);

    const getAllProduct = async (tab1) => {
        if (tab1 === 1) {
            setProduct(allProduct[0]?.trending)
        } else if (tab1 === 2) {
            setProduct(allProduct[0]?.onSale)
        } else {
            setProduct(allProduct[0]?.commingSoon)
        }
    }

    useEffect(() => {
        getAllProduct(tab1)
    }, [tab1])

    return (
        <Swiper
            slidesPerView={3}
            spaceBetween={10}
            navigation={{
                enabled: true,
                prevEl: ".product-swiper-button-prev",
                nextEl: ".product-swiper-button-next"
            }}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
            grid={tab1 === 1
                ? allProduct[0]?.trending?.length > 5
                    ? { rows: 2 }
                    : { rows: 1 }
                : tab1 === 2
                    ? allProduct[0]?.onSale?.length > 5
                        ? { rows: 2 }
                        : { rows: 1 }
                    : allProduct[0]?.commingSoon?.length > 5
                        ? { rows: 2 }
                        : { rows: 1 }
            }
            pagination={{
                clickable: true,
            }}
            breakpoints={{
                0: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                420: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
            }}
            modules={[Navigation, Pagination, Grid, Autoplay]}
            className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow"
        >
            {product?.map((currElem, index) => {
                return (
                    <SwiperSlide>
                        <Product
                            {...currElem.id}
                            {...currElem}
                            border={true}
                        />
                    </SwiperSlide>
                );
            })}
        </Swiper>
    )
}

export default ProductGridCrousel