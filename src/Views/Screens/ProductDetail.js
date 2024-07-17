/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from "react";
import product4 from "../../Assets/images/products/product-4.jpg";
import product6 from "../../Assets/images/products/product-6.jpg";
import product11 from "../../Assets/images/products/product-11.jpg";
import product10 from "../../Assets/images/products/product-10.jpg";
import product7 from "../../Assets/images/products/product-7.jpg";
import ProductGallery from "../Components/ProductGallery";
import styled from "styled-components";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { openImageModal } from "../../Database/Action/DashboardAction";
import { proDetailTab } from "../../Utils/CustomList";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import centered1Big from "../../Assets/images/products/single/centered/1-big.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "transparent",
    boxShadow: 24,
};

const tabStyle = {
    color: "#333333",
    fontSize: "1.6rem",
    padding: ".55rem 3rem",
    borderBottomWidth: ".2rem",
    textTransfome: "capitalize",
};

const ProductDetail = () => {
    const dispatch = useDispatch();
    const [count, setCount] = useState(1);
    const [value, setValue] = React.useState(1);
    // const [modalImage, setModalImage] = useState(centered1Big)
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const imageModal = useSelector((state) => state.DashboardReducer.imageModal);
    const handleClose = () => dispatch(openImageModal(false));
    useEffect(() => { }, []);
    return (
        <Wrapper>
            <main className="main">
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={imageModal}
                    onClose={handleClose}
                    closeAfterTransition
                    slots={{ backdrop: Backdrop }}
                    slotProps={{
                        backdrop: {
                            timeout: 500,
                        },
                    }}
                >
                    <Fade in={imageModal}>
                        <Box sx={style}>
                            <figure>
                                <img className="mfp-img" src={centered1Big}></img>
                                <figcaption>
                                    <div class="mfp-bottom-bar">
                                        <div class="mfp-title">Product</div>
                                        <div class="mfp-counter">1/1</div>
                                    </div>
                                </figcaption>
                            </figure>
                        </Box>
                    </Fade>
                </Modal>
                <nav aria-label="breadcrumb" className="breadcrumb-nav border-0 mb-0">
                    <div className="container d-flex align-items-center">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="index.html">Home</a>
                            </li>
                            <li className="breadcrumb-item">
                                <a href="#">Products</a>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">
                                Centered
                            </li>
                        </ol>
                        <nav className="product-pager ml-auto" aria-label="Product">
                            <a
                                className="product-pager-link product-pager-prev"
                                href="#"
                                aria-label="Previous"
                                tabIndex={-1}
                            >
                                <i className="icon-angle-left" />
                                <span>Prev</span>
                            </a>
                            <a
                                className="product-pager-link product-pager-next"
                                href="#"
                                aria-label="Next"
                                tabIndex={-1}
                            >
                                <span>Next</span>
                                <i className="icon-angle-right" />
                            </a>
                        </nav>
                        {/* End .pager-nav */}
                    </div>
                    {/* End .container */}
                </nav>
                {/* End .breadcrumb-nav */}
                <div className="page-content">
                    <div className="container">
                        <div className="product-details-top mb-2">
                            <div className="row">
                                <div className="col-md-6">
                                    <ProductGallery />
                                </div>
                                {/* End .col-md-6 */}
                                <div className="col-md-6">
                                    <div className="product-details product-details-centered">
                                        <h1 className="product-title">Beige metal hoop tote bag</h1>
                                        {/* End .product-title */}
                                        <div className="ratings-container">
                                            <div className="ratings">
                                                <div className="ratings-val" style={{ width: "80%" }} />
                                                {/* End .ratings-val */}
                                            </div>
                                            {/* End .ratings */}
                                            <a
                                                className="ratings-text"
                                                href="#product-review-link"
                                                id="review-link"
                                            >
                                                ( 2 Reviews )
                                            </a>
                                        </div>
                                        {/* End .rating-container */}
                                        <div className="product-price">$76.00</div>
                                        {/* End .product-price */}
                                        <div className="product-content">
                                            <p>
                                                Sed egestas, ante et vulputate volutpat, eros pede
                                                semper est, vitae luctus metus libero eu augue. Morbi
                                                purus libero.
                                            </p>
                                        </div>
                                        {/* End .product-content */}
                                        <div className="details-filter-row details-row-size">
                                            <label>Color:</label>
                                            <div className="product-nav product-nav-dots">
                                                <a
                                                    href="#"
                                                    className="active"
                                                    style={{ background: "#cc9966" }}
                                                >
                                                    <span className="sr-only">Color name</span>
                                                </a>
                                                <a href="#" style={{ background: "#333333" }}>
                                                    <span className="sr-only">Color name</span>
                                                </a>
                                            </div>
                                            {/* End .product-nav */}
                                        </div>
                                        {/* End .details-filter-row */}
                                        <div className="details-filter-row details-row-size">
                                            <label htmlFor="size">Size:</label>
                                            <div className="select-custom">
                                                <select name="size" id="size" className="form-control">
                                                    <option value="#" selected="selected">
                                                        One Size
                                                    </option>
                                                    <option value="s">Small</option>
                                                    <option value="m">Medium</option>
                                                    <option value="l">Large</option>
                                                    <option value="xl">Extra Large</option>
                                                </select>
                                            </div>
                                            {/* End .select-custom */}
                                            <a href="#" className="size-guide">
                                                <i className="icon-th-list" />
                                                size guide
                                            </a>
                                        </div>
                                        {/* End .details-filter-row */}
                                        <div className="product-details-action">
                                            <div className="details-action-col">
                                                <div className="product-details-quantity">
                                                    <div
                                                        className="form-control1"
                                                        style={{
                                                            display: "flex",
                                                            flexDirection: "row",
                                                            alignItems: "center",
                                                        }}
                                                    >
                                                        <i
                                                            className="fa fa-minus iconHover"
                                                            style={{ marginRight: "15px", cursor: "pointer" }}
                                                            onClick={() =>
                                                                count > 1 ? setCount(count - 1) : setCount(1)
                                                            }
                                                        />

                                                        <input
                                                            style={{
                                                                width: "15px",
                                                                backgroundColor: "transparent",
                                                            }}
                                                            value={count}
                                                        />
                                                        <i
                                                            className="fa fa-plus"
                                                            style={{ marginLeft: "15px", cursor: "pointer" }}
                                                            onClick={() =>
                                                                count < 10 ? setCount(count + 1) : setCount(10)
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                                {/* End .product-details-quantity */}
                                                <button className="buttonStyle">
                                                    <i className="fa fa-cart-shopping mr-4" />
                                                    <a>add to cart</a>
                                                </button>
                                            </div>
                                            {/* End .details-action-col */}
                                            <div className="details-action-wrapper">
                                                <a
                                                    href="#"
                                                    className="btn-product btn-wishlist"
                                                    title="Wishlist"
                                                >
                                                    <span>Add to Wishlist</span>
                                                </a>
                                                <a
                                                    href="#"
                                                    className="btn-product btn-compare"
                                                    title="Compare"
                                                >
                                                    <span>Add to Compare</span>
                                                </a>
                                            </div>
                                            {/* End .details-action-wrapper */}
                                        </div>
                                        {/* End .product-details-action */}
                                        <div className="product-details-footer">
                                            <div className="product-cat">
                                                <span>Category:</span>
                                                <a href="#">Women</a>,<a href="#">Dresses</a>,
                                                <a href="#">Yellow</a>
                                            </div>
                                            {/* End .product-cat */}
                                            <div className="social-icons social-icons-sm">
                                                <span className="social-label">Share:</span>
                                                <a
                                                    href="#"
                                                    className="social-icon"
                                                    title="Facebook"
                                                    target="_blank"
                                                >
                                                    <i className="icon-facebook-f" />
                                                </a>
                                                <a
                                                    href="#"
                                                    className="social-icon"
                                                    title="Twitter"
                                                    target="_blank"
                                                >
                                                    <i className="icon-twitter" />
                                                </a>
                                                <a
                                                    href="#"
                                                    className="social-icon"
                                                    title="Instagram"
                                                    target="_blank"
                                                >
                                                    <i className="icon-instagram" />
                                                </a>
                                                <a
                                                    href="#"
                                                    className="social-icon"
                                                    title="Pinterest"
                                                    target="_blank"
                                                >
                                                    <i className="icon-pinterest" />
                                                </a>
                                            </div>
                                        </div>
                                        {/* End .product-details-footer */}
                                    </div>
                                    {/* End .product-details */}
                                </div>
                                {/* End .col-md-6 */}
                            </div>
                            {/* End .row */}
                        </div>
                        {/* End .product-details-top */}
                        <div className="product-details-tab">
                            <TabContext value={value}>
                                <Box className="nav nav-pills justify-content-center">
                                    <TabList
                                        indicatorColor="primary"
                                        textColor="primary"
                                        onChange={handleChange}
                                        aria-label="lab API tabs example"
                                    >
                                        {proDetailTab.map((item, index) => {
                                            return (
                                                <Tab
                                                    key={index}
                                                    sx={tabStyle}
                                                    label={item.header}
                                                    value={item.id}
                                                />
                                            );
                                        })}
                                    </TabList>
                                </Box>
                                <Box className="tab-content">
                                    {proDetailTab.map((item, index) => {
                                        return (
                                            <TabPanel
                                                sx={{ padding: "20px", lineHeight: "2" }}
                                                className={
                                                    value === item.id
                                                        ? "tab-pane fade show active"
                                                        : "tab-pane fade"
                                                }
                                                value={value}
                                            >
                                                {item.body}
                                            </TabPanel>
                                        );
                                    })}
                                </Box>
                            </TabContext>

                            {/* End .tab-content */}
                        </div>
                        {/* End .product-details-tab */}
                        <h2 className="title text-center mb-4">You May Also Like</h2>
                        {/* End .title text-center */}

                        <div
                            class="swiper-button-prev"
                            style={{ marginTop: "140px", color: "#a6c76c" }}
                        ></div>

                        <div
                            class="swiper-button-next"
                            style={{ marginTop: "140px", color: "#a6c76c" }}
                        ></div>
                        <Swiper
                            slidesPerView={4}
                            spaceBetween={40}
                            cssMode={true}
                            mousewheel={true}
                            keyboard={true}
                            onSlideChange={() => console.log("slide change")}
                            onSwiper={(swiper) => console.log(swiper)}
                            navigation={{
                                enabled: true,
                                prevEl: ".swiper-button-prev",
                                nextEl: ".swiper-button-next",
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                },
                                480: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                                992: {
                                    slidesPerView: 4,
                                    spaceBetween: 40,
                                },
                                1200: {
                                    slidesPerView: 4,
                                    spaceBetween: 40,
                                },
                            }}
                            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                            className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow"
                        >
                            <SwiperSlide className="product product-7 text-center">
                                <figure className="product-media">
                                    <span className="product-label label-new">New</span>
                                    <a href="product.html">
                                        <img
                                            src={product4}
                                            alt="Product image"
                                            className="product-image"
                                        />
                                    </a>
                                    <div className="product-action-vertical">
                                        <a
                                            href="#"
                                            className="btn-product-icon btn-wishlist btn-expandable"
                                        >
                                            <span>add to wishlist</span>
                                        </a>
                                        <a
                                            href="popup/quickView.html"
                                            className="btn-product-icon btn-quickview"
                                            title="Quick view"
                                        >
                                            <span>Quick view</span>
                                        </a>
                                        <a
                                            href="#"
                                            className="btn-product-icon btn-compare"
                                            title="Compare"
                                        >
                                            <span>Compare</span>
                                        </a>
                                    </div>
                                    {/* End .product-action-vertical */}
                                    <div className="product-action">
                                        <a href="#" className="btn-product btn-cart">
                                            <span>add to cart</span>
                                        </a>
                                    </div>
                                    {/* End .product-action */}
                                </figure>
                                {/* End .product-media */}
                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="#">Women</a>
                                    </div>
                                    {/* End .product-cat */}
                                    <h3 className="product-title">
                                        <a href="product.html">
                                            Brown paperbag waist <br />
                                            pencil skirt
                                        </a>
                                    </h3>
                                    {/* End .product-title */}
                                    <div className="product-price">$60.00</div>
                                    {/* End .product-price */}
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{ width: "20%" }} />
                                            {/* End .ratings-val */}
                                        </div>
                                        {/* End .ratings */}
                                        <span className="ratings-text">( 2 Reviews )</span>
                                    </div>
                                    {/* End .rating-container */}
                                    <div className="product-nav product-nav-dots">
                                        <a
                                            href="#"
                                            className="active"
                                            style={{ background: "#cc9966" }}
                                        >
                                            <span className="sr-only">Color name</span>
                                        </a>
                                        <a href="#" style={{ background: "#333333" }}>
                                            <span className="sr-only">Color name</span>
                                        </a>
                                        <a href="#" style={{ background: "#806b3e" }}>
                                            <span className="sr-only">Color name</span>
                                        </a>
                                    </div>
                                    {/* End .product-nav */}
                                </div>
                                {/* End .product-body */}
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="product product-7 text-center">
                                    <figure className="product-media">
                                        <span className="product-label label-out">
                                            Out of Stock
                                        </span>
                                        <a href="product.html">
                                            <img
                                                src={product6}
                                                alt="Product image"
                                                className="product-image"
                                            />
                                        </a>
                                        <div className="product-action-vertical">
                                            <a
                                                href="#"
                                                className="btn-product-icon btn-wishlist btn-expandable"
                                            >
                                                <span>add to wishlist</span>
                                            </a>
                                            <a
                                                href="popup/quickView.html"
                                                className="btn-product-icon btn-quickview"
                                                title="Quick view"
                                            >
                                                <span>Quick view</span>
                                            </a>
                                            <a
                                                href="#"
                                                className="btn-product-icon btn-compare"
                                                title="Compare"
                                            >
                                                <span>Compare</span>
                                            </a>
                                        </div>
                                        {/* End .product-action-vertical */}
                                        <div className="product-action">
                                            <a href="#" className="btn-product btn-cart">
                                                <span>add to cart</span>
                                            </a>
                                        </div>
                                        {/* End .product-action */}
                                    </figure>
                                    {/* End .product-media */}
                                    <div className="product-body">
                                        <div className="product-cat">
                                            <a href="#">Jackets</a>
                                        </div>
                                        {/* End .product-cat */}
                                        <h3 className="product-title">
                                            <a href="product.html">Khaki utility boiler jumpsuit</a>
                                        </h3>
                                        {/* End .product-title */}
                                        <div className="product-price">
                                            <span className="out-price">$120.00</span>
                                        </div>
                                        {/* End .product-price */}
                                        <div className="ratings-container">
                                            <div className="ratings">
                                                <div className="ratings-val" style={{ width: "80%" }} />
                                                {/* End .ratings-val */}
                                            </div>
                                            {/* End .ratings */}
                                            <span className="ratings-text">( 6 Reviews )</span>
                                        </div>
                                        {/* End .rating-container */}
                                    </div>
                                    {/* End .product-body */}
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                {" "}
                                <div className="product product-7 text-center">
                                    <figure className="product-media">
                                        <span className="product-label label-top">Top</span>
                                        <a href="product.html">
                                            <img
                                                src={product11}
                                                alt="Product image"
                                                className="product-image"
                                            />
                                        </a>
                                        <div className="product-action-vertical">
                                            <a
                                                href="#"
                                                className="btn-product-icon btn-wishlist btn-expandable"
                                            >
                                                <span>add to wishlist</span>
                                            </a>
                                            <a
                                                href="popup/quickView.html"
                                                className="btn-product-icon btn-quickview"
                                                title="Quick view"
                                            >
                                                <span>Quick view</span>
                                            </a>
                                            <a
                                                href="#"
                                                className="btn-product-icon btn-compare"
                                                title="Compare"
                                            >
                                                <span>Compare</span>
                                            </a>
                                        </div>
                                        {/* End .product-action-vertical */}
                                        <div className="product-action">
                                            <a href="#" className="btn-product btn-cart">
                                                <span>add to cart</span>
                                            </a>
                                        </div>
                                        {/* End .product-action */}
                                    </figure>
                                    {/* End .product-media */}
                                    <div className="product-body">
                                        <div className="product-cat">
                                            <a href="#">Shoes</a>
                                        </div>
                                        {/* End .product-cat */}
                                        <h3 className="product-title">
                                            <a href="product.html">
                                                Light brown studded Wide fit wedges
                                            </a>
                                        </h3>
                                        {/* End .product-title */}
                                        <div className="product-price">$110.00</div>
                                        {/* End .product-price */}
                                        <div className="ratings-container">
                                            <div className="ratings">
                                                <div className="ratings-val" style={{ width: "80%" }} />
                                                {/* End .ratings-val */}
                                            </div>
                                            {/* End .ratings */}
                                            <span className="ratings-text">( 1 Reviews )</span>
                                        </div>
                                        {/* End .rating-container */}
                                        <div className="product-nav product-nav-dots">
                                            <a
                                                href="#"
                                                className="active"
                                                style={{ background: "#8b513d" }}
                                            >
                                                <span className="sr-only">Color name</span>
                                            </a>
                                            <a href="#" style={{ background: "#333333" }}>
                                                <span className="sr-only">Color name</span>
                                            </a>
                                            <a href="#" style={{ background: "#d2b99a" }}>
                                                <span className="sr-only">Color name</span>
                                            </a>
                                        </div>
                                        {/* End .product-nav */}
                                    </div>
                                    {/* End .product-body */}
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                {" "}
                                <div className="product product-7 text-center">
                                    <figure className="product-media">
                                        <a href="product.html">
                                            <img
                                                src={product10}
                                                alt="Product image"
                                                className="product-image"
                                            />
                                        </a>
                                        <div className="product-action-vertical">
                                            <a
                                                href="#"
                                                className="btn-product-icon btn-wishlist btn-expandable"
                                            >
                                                <span>add to wishlist</span>
                                            </a>
                                            <a
                                                href="popup/quickView.html"
                                                className="btn-product-icon btn-quickview"
                                                title="Quick view"
                                            >
                                                <span>Quick view</span>
                                            </a>
                                            <a
                                                href="#"
                                                className="btn-product-icon btn-compare"
                                                title="Compare"
                                            >
                                                <span>Compare</span>
                                            </a>
                                        </div>
                                        {/* End .product-action-vertical */}
                                        <div className="product-action">
                                            <a href="#" className="btn-product btn-cart">
                                                <span>add to cart</span>
                                            </a>
                                        </div>
                                        {/* End .product-action */}
                                    </figure>
                                    {/* End .product-media */}
                                    <div className="product-body">
                                        <div className="product-cat">
                                            <a href="#">Jumpers</a>
                                        </div>
                                        {/* End .product-cat */}
                                        <h3 className="product-title">
                                            <a href="product.html">Yellow button front tea top</a>
                                        </h3>
                                        {/* End .product-title */}
                                        <div className="product-price">$56.00</div>
                                        {/* End .product-price */}
                                        <div className="ratings-container">
                                            <div className="ratings">
                                                <div className="ratings-val" style={{ width: "0%" }} />
                                                {/* End .ratings-val */}
                                            </div>
                                            {/* End .ratings */}
                                            <span className="ratings-text">( 0 Reviews )</span>
                                        </div>
                                        {/* End .rating-container */}
                                    </div>
                                    {/* End .product-body */}
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                {" "}
                                <div className="product product-7 text-center">
                                    <figure className="product-media">
                                        <a href="product.html">
                                            <img
                                                src={product7}
                                                alt="Product image"
                                                className="product-image"
                                            />
                                        </a>
                                        <div className="product-action-vertical">
                                            <a
                                                href="#"
                                                className="btn-product-icon btn-wishlist btn-expandable"
                                            >
                                                <span>add to wishlist</span>
                                            </a>
                                            <a
                                                href="popup/quickView.html"
                                                className="btn-product-icon btn-quickview"
                                                title="Quick view"
                                            >
                                                <span>Quick view</span>
                                            </a>
                                            <a
                                                href="#"
                                                className="btn-product-icon btn-compare"
                                                title="Compare"
                                            >
                                                <span>Compare</span>
                                            </a>
                                        </div>
                                        {/* End .product-action-vertical */}
                                        <div className="product-action">
                                            <a href="#" className="btn-product btn-cart">
                                                <span>add to cart</span>
                                            </a>
                                        </div>
                                        {/* End .product-action */}
                                    </figure>
                                    {/* End .product-media */}
                                    <div className="product-body">
                                        <div className="product-cat">
                                            <a href="#">Jeans</a>
                                        </div>
                                        {/* End .product-cat */}
                                        <h3 className="product-title">
                                            <a href="product.html">
                                                Blue utility pinafore denim dress
                                            </a>
                                        </h3>
                                        {/* End .product-title */}
                                        <div className="product-price">$76.00</div>
                                        {/* End .product-price */}
                                        <div className="ratings-container">
                                            <div className="ratings">
                                                <div className="ratings-val" style={{ width: "20%" }} />
                                                {/* End .ratings-val */}
                                            </div>
                                            {/* End .ratings */}
                                            <span className="ratings-text">( 2 Reviews )</span>
                                        </div>
                                        {/* End .rating-container */}
                                    </div>
                                    {/* End .product-body */}
                                </div>
                            </SwiperSlide>
                        </Swiper>

                        {/* End .owl-carousel */}
                    </div>
                    {/* End .container */}
                </div>
                {/* End .page-content */}
            </main>
            {/* End .main */}
        </Wrapper>
    );
};

const Wrapper = styled.section`
  .form-control1 {
    height: 40px;
    padding: 0.85rem 2rem;
    font-size: 1.4rem;
    line-height: 1.5;
    font-weight: 300;
    color: #777;
    background-color: #fafafa;
    border: 1px solid #ebebeb;
    border-radius: 0;
    transition: all 0.3s;
    box-shadow: none;
  }

  .buttonStyle {
    width: 150px;
    height: 40px;
    color: #a6c76c;
    font-weight: bold;
    font-family: "Poppins";
    border: 1px solid #a6c76c;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 14px;
    text-transform: capitalize;
    transition: all 0.3s ease;
    -webkit-transition: all 0.3s ease 0s;
    -moz-transition: all 0.3s ease 0s;
    -o-transition: all 0.3s ease 0s;
    &:hover,
    &:active {
      background-color: #a6c76c;
      border: none;
      color: white;
      cursor: pointer;
      transform: scale(0.96);
    }
  }

  .btn-product:hover span .btn-wishlist:focus span,
  .btn-compare:focus span {
    color: #a6c76c;
    &:hover,
    &:active {
      color: #a6c76c;
    }
  }
`;

export default ProductDetail;
