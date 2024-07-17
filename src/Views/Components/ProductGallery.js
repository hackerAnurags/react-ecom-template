/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import centered1 from "../../Assets/images/products/single/centered/1.jpg"
import centered1Big from "../../Assets/images/products/single/centered/1-big.jpg"
import centered1Small from "../../Assets/images/products/single/centered/1-small.jpg"
import centerd3Small from "../../Assets/images/products/single/centered/3-small.jpg"
import centered4Small from "../../Assets/images/products/single/centered/4-small.jpg"
import ImageMagnifier from './ImageMagnifier'
import { useDispatch } from 'react-redux'
import { openImageModal } from '../../Database/Action/DashboardAction'

const ProductGallery = () => {
    const dispatch = useDispatch();
    return (
        <div className="product-gallery product-gallery-vertical">
            <div className="row">
                <figure className="product-main-image">
                    <ImageMagnifier
                        src={centered1Big}
                        width="100%"
                        height="100%"
                    />
                    <a
                        onClick={() => dispatch(openImageModal(true))}
                        id="btn-product-gallery"
                        className="btn-product-gallery"
                    >
                        <i className="icon-arrows" />
                    </a>
                </figure>
                {/* End .product-main-image */}
                <div
                    id="product-zoom-gallery"
                    className="product-image-gallery"
                >
                    <a
                        className="product-gallery-item active"
                        href="#"
                        data-image="assets/images/products/single/centered/1.jpg"
                        data-zoom-image="assets/images/products/single/centered/1-big.jpg"
                    >
                        <img
                            src={centered1Small}
                            alt="product side"
                        />
                    </a>
                    <a
                        className="product-gallery-item"
                        href="#"
                        data-image="assets/images/products/single/centered/2.jpg"
                        data-zoom-image="assets/images/products/single/centered/2-big.jpg"
                    >
                        <img
                            src={centerd3Small}
                            alt="product cross"
                        />
                    </a>
                    <a
                        className="product-gallery-item"
                        href="#"
                        data-image="assets/images/products/single/centered/3.jpg"
                        data-zoom-image="assets/images/products/single/centered/3-big.jpg"
                    >
                        <img
                            src={centerd3Small}
                            alt="product with model"
                        />
                    </a>
                    <a
                        className="product-gallery-item"
                        href="#"
                        data-image="assets/images/products/single/centered/4.jpg"
                        data-zoom-image="assets/images/products/single/centered/4-big.jpg"
                    >
                        <img
                            src={centered4Small}
                            alt="product back"
                        />
                    </a>
                </div>
                {/* End .product-image-gallery */}
            </div>
            {/* End .row */}
        </div>
    )
}

export default ProductGallery