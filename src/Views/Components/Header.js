/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
// import logo from "../../Assets/images/demos/demo-2/logo.png";
import logo from "../../Assets/images/iot_asset/icon.png";
import product1 from "../../Assets/images/products/cart/product-1.jpg"
import product2 from "../../Assets/images/products/cart/product-2.jpg"
import banner1 from "../../Assets/images/menu/banner-1.jpg"
import banner2 from "../../Assets/images/menu/banner-2.jpg"
import { NavLink, useNavigate } from "react-router-dom"
import { allCategory } from '../../Utils/CustomList';

const Header = () => {
    const navigate = useNavigate();
    return (
        <header className="header header-2 header-intro-clearance">
            <div className="header-top" style={{ backgroundImage: "linear-gradient(90.1deg, rgb(66, 138, 220) 0.3%, rgb(56, 202, 209) 99.9%)" }}>
                <div className="container">
                    <div className="header-left">
                        <p className='text-white'>Special collection already available.</p>
                        <a className='text-white' href="#">&nbsp;Read more ...</a>
                    </div>
                    {/* End .header-left */}
                    <div className="header-right">
                        <ul className="top-menu">
                            <li>
                                <a className="text-white" href="#">Links</a>
                                <ul>
                                    <li>
                                        <div className="header-dropdown">
                                            <a className="text-white" href="#">USD</a>
                                            <div className="header-menu">
                                                <ul>
                                                    <li>
                                                        <a href="#">Eur</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Usd</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            {/* End .header-menu */}
                                        </div>
                                    </li>
                                    <li>
                                        <div className="header-dropdown">
                                            <a className="text-white" href="#">English</a>
                                            <div className="header-menu">
                                                <ul>
                                                    <li>
                                                        <a href="#">English</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">French</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Spanish</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            {/* End .header-menu */}
                                        </div>
                                    </li>
                                    <li>
                                        <a className="text-white" href="#signin-modal" data-toggle="modal">
                                            Sign in / Sign up
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        {/* End .top-menu */}
                    </div>
                    {/* End .header-right */}
                </div>
                {/* End .container */}
            </div>
            {/* End .header-top */}
            <div className="header-middle">
                <div className="container">
                    <div className="header-left">
                        <button className="mobile-menu-toggler">
                            <span className="sr-only">Toggle mobile menu</span>
                            <i className="icon-bars" />
                        </button>
                        <NavLink to={"/"} className="logo">
                            <img
                                src={logo}
                                alt="Molla Logo"
                                width={130}
                                height={40}
                            />
                        </NavLink>
                    </div>
                    {/* End .header-left */}
                    <div className="header-center">
                        <div className="header-search header-search-extended header-search-visible header-search-no-radius d-none d-lg-block">
                            <a href="#" className="search-toggle" role="button">
                                <i className="icon-search" />
                            </a>
                            <form action="#" method="get">
                                <div className="header-search-wrapper search-wrapper-wide">
                                    <label htmlFor="q" className="sr-only">
                                        Search
                                    </label>
                                    <input
                                        type="search"
                                        className="form-control"
                                        name="q"
                                        id="q"
                                        placeholder="Search product ..."
                                        required=""
                                    />
                                    <button className="btn btn-primary" type="submit">
                                        <i className="icon-search" />
                                    </button>
                                </div>
                                {/* End .header-search-wrapper */}
                            </form>
                        </div>
                        {/* End .header-search */}
                    </div>
                    <div className="header-right">
                        <div className="account">
                            <NavLink to="/profile" title="My account">
                                <div className="icon">
                                    <i className="icon-user" />
                                </div>
                                <p>Account</p>
                            </NavLink>
                        </div>
                        {/* End .compare-dropdown */}
                        <div className="wishlist">
                            <NavLink href="/wishlist" title="Wishlist">
                                <div className="icon">
                                    <i className="icon-heart-o" />
                                    <span className="wishlist-count badge">3</span>
                                </div>
                                <p>Wishlist</p>
                            </NavLink>
                        </div>
                        {/* End .compare-dropdown */}
                        <div className="dropdown cart-dropdown">
                            <a
                                href="#"
                                className="dropdown-toggle"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                data-display="static"
                            >
                                <div className="icon">
                                    <i className="icon-shopping-cart" />
                                    <span className="cart-count">2</span>
                                </div>
                                <p>Cart</p>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                                <div className="dropdown-cart-products">
                                    <div className="product">
                                        <div className="product-cart-details">
                                            <h4 className="product-title">
                                                <NavLink to="/">
                                                    Beige knitted elastic runner shoes
                                                </NavLink>
                                            </h4>
                                            <span className="cart-product-info">
                                                <span className="cart-product-qty">1</span>x $84.00
                                            </span>
                                        </div>
                                        {/* End .product-cart-details */}
                                        <figure className="product-image-container">
                                            <NavLink to="/" className="product-image">
                                                <img
                                                    src={product1}
                                                    alt="product"
                                                />
                                            </NavLink>
                                        </figure>
                                        <a href="#" className="btn-remove" title="Remove Product">
                                            <i className="icon-close" />
                                        </a>
                                    </div>
                                    {/* End .product */}
                                    <div className="product">
                                        <div className="product-cart-details">
                                            <h4 className="product-title">
                                                <NavLink to="/" >
                                                    Blue utility pinafore denim dress
                                                </NavLink>
                                            </h4>
                                            <span className="cart-product-info">
                                                <span className="cart-product-qty">1</span>x $76.00
                                            </span>
                                        </div>
                                        {/* End .product-cart-details */}
                                        <figure className="product-image-container">
                                            <NavLink to="/" className="product-image">
                                                <img
                                                    src={product2}
                                                    alt="product"
                                                />
                                            </NavLink>
                                        </figure>
                                        <a href="#" className="btn-remove" title="Remove Product">
                                            <i className="icon-close" />
                                        </a>
                                    </div>
                                    {/* End .product */}
                                </div>
                                {/* End .cart-product */}
                                <div className="dropdown-cart-total">
                                    <span>Total</span>
                                    <span className="cart-total-price">$160.00</span>
                                </div>
                                {/* End .dropdown-cart-total */}
                                <div className="dropdown-cart-action">
                                    <NavLink to="/cart" className="btn btn-primary">
                                        View Cart
                                    </NavLink>
                                    <a href="checkout.html" className="btn btn-outline-primary-2">
                                        <span>Checkout</span>
                                        <i className="icon-long-arrow-right" />
                                    </a>
                                </div>
                                {/* End .dropdown-cart-total */}
                            </div>
                            {/* End .dropdown-menu */}
                        </div>
                        {/* End .cart-dropdown */}
                    </div>
                    {/* End .header-right */}
                </div>
                {/* End .container */}
            </div>
            {/* End .header-middle */}
            <div className="header-bottom sticky-header">
                <div className="container">
                    <div className="header-left">
                        <div className="dropdown category-dropdown">
                            <a
                                href="#"
                                className="dropdown-toggle"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                data-display="static"
                                title="Browse Categories"
                            >
                                Browse Categories
                            </a>
                            <div className="dropdown-menu">
                                <nav className="side-nav">
                                    <ul className="menu-vertical sf-arrows">
                                        {
                                            allCategory[0]?.categoryData?.map((item, index) => {
                                                return (
                                                    <li>
                                                        <a href=''>{item.name}</a>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                    {/* End .menu-vertical */}
                                </nav>
                                {/* End .side-nav */}
                            </div>
                            {/* End .dropdown-menu */}
                        </div>
                        {/* End .category-dropdown */}
                    </div>
                    {/* End .header-left */}
                    <div className="header-center">
                        <nav className="main-nav">
                            <ul className="menu sf-arrows">
                                <li className="active">
                                    <NavLink to={"/"}>
                                        Home
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink to={"/products"}>
                                        Product
                                    </NavLink>
                                </li>

                                <li>
                                    <a href="#" className="sf-with-ul">
                                        Shop
                                    </a>
                                    <div className="megamenu megamenu-sm">
                                        <div className="row no-gutters">
                                            <div className="col-md-8">
                                                <div className="menu-col">
                                                    <div className="menu-title">Shop Pages</div>
                                                    {/* End .menu-title */}
                                                    <ul>
                                                        <li>
                                                            <NavLink to="/cart">Cart</NavLink>
                                                        </li>
                                                        <li>
                                                            <NavLink to="/wishlist">Wishlist</NavLink>
                                                        </li>
                                                        <li>
                                                            <NavLink to="/order">Order</NavLink>
                                                        </li>
                                                    </ul>
                                                    {/* End .row */}
                                                </div>
                                                {/* End .menu-col */}
                                            </div>
                                            {/* End .col-md-8 */}
                                            <div className="col-md-4">
                                                <div className="banner banner-overlay">
                                                    <NavLink
                                                        to="/products"
                                                        className="banner banner-menu"
                                                    >
                                                        <img
                                                            src={banner1}
                                                            alt="Banner"
                                                        />
                                                        <div className="banner-content banner-content-top">
                                                            <div className="banner-title text-white">
                                                                Last <br />
                                                                Chance
                                                                <br />
                                                                <span>
                                                                    <strong>Sale</strong>
                                                                </span>
                                                            </div>
                                                            {/* End .banner-title */}
                                                        </div>
                                                        {/* End .banner-content */}
                                                    </NavLink>
                                                </div>
                                                {/* End .banner banner-overlay */}
                                            </div>
                                            {/* End .col-md-4 */}
                                        </div>
                                        {/* End .row */}
                                    </div>
                                    {/* End .megamenu megamenu-md */}
                                </li>

                                <li>
                                    <a href="#" className="sf-with-ul">
                                        Pages
                                    </a>
                                    <ul>
                                        <li>
                                            <NavLink to="/about">
                                                About
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/contact">
                                                Contact
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/privacy">Privacy Policy</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/faq">FAQs</NavLink>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <NavLink to="/blog" className="">
                                        Blog
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/register"}>
                                        Login
                                    </NavLink>
                                </li>
                            </ul>
                            {/* End .menu */}
                        </nav>
                        {/* End .main-nav */}
                    </div>
                    {/* End .header-center */}
                    <div className="header-right">
                        <i className="la la-lightbulb-o" />
                        <p>
                            Clearance<span className="highlight">&nbsp;Up to 30% Off</span>
                        </p>
                    </div>
                </div>
                {/* End .container */}
            </div>
            {/* End .header-bottom */}
        </header >
    )
}

export default Header