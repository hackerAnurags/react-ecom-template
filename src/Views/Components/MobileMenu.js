/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { NavLink } from "react-router-dom"

const MobileMenu = () => {
    return (
        <div className="mobile-menu-container mobile-menu-light">
            <div className="mobile-menu-wrapper">
                <span className="mobile-menu-close">
                    <i className="icon-close" />
                </span>
                <form action="#" method="get" className="mobile-search">
                    <label htmlFor="mobile-search" className="sr-only">
                        Search
                    </label>
                    <input
                        type="search"
                        className="form-control"
                        name="mobile-search"
                        id="mobile-search"
                        placeholder="Search product ..."
                        required=""
                    />
                    <button className="btn btn-primary" type="submit">
                        <i className="icon-search" />
                    </button>
                </form>
                <ul className="nav nav-pills-mobile nav-border-anim" role="tablist">
                    <li className="nav-item">
                        <a
                            className="nav-link active"
                            id="mobile-menu-link"
                            data-toggle="tab"
                            href="#mobile-menu-tab"
                            role="tab"
                            aria-controls="mobile-menu-tab"
                            aria-selected="true"
                        >
                            Menu
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            id="mobile-cats-link"
                            data-toggle="tab"
                            href="#mobile-cats-tab"
                            role="tab"
                            aria-controls="mobile-cats-tab"
                            aria-selected="false"
                        >
                            Categories
                        </a>
                    </li>
                </ul>
                <div className="tab-content">
                    <div
                        className="tab-pane fade show active"
                        id="mobile-menu-tab"
                        role="tabpanel"
                        aria-labelledby="mobile-menu-link"
                    >
                        <nav className="mobile-nav">
                            <ul className="mobile-menu">
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
                                    <a className="sf-with-ul">
                                        Shop
                                    </a>
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
                                </li>
                                <li>
                                    <a href="#">Pages</a>
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
                        </nav>
                        {/* End .mobile-nav */}
                    </div>
                    {/* .End .tab-pane */}
                    <div
                        className="tab-pane fade"
                        id="mobile-cats-tab"
                        role="tabpanel"
                        aria-labelledby="mobile-cats-link"
                    >
                        <nav className="mobile-cats-nav">
                            <ul className="mobile-cats-menu">
                                <li>
                                    <a className="mobile-cats-lead" href="#">
                                        Daily offers
                                    </a>
                                </li>
                                <li>
                                    <a className="mobile-cats-lead" href="#">
                                        Gift Ideas
                                    </a>
                                </li>
                                <li>
                                    <a href="#">Beds</a>
                                </li>
                                <li>
                                    <a href="#">Lighting</a>
                                </li>
                                <li>
                                    <a href="#">Sofas &amp; Sleeper sofas</a>
                                </li>
                                <li>
                                    <a href="#">Storage</a>
                                </li>
                                <li>
                                    <a href="#">Armchairs &amp; Chaises</a>
                                </li>
                                <li>
                                    <a href="#">Decoration </a>
                                </li>
                                <li>
                                    <a href="#">Kitchen Cabinets</a>
                                </li>
                                <li>
                                    <a href="#">Coffee &amp; Tables</a>
                                </li>
                                <li>
                                    <a href="#">Outdoor Furniture </a>
                                </li>
                            </ul>
                            {/* End .mobile-cats-menu */}
                        </nav>
                        {/* End .mobile-cats-nav */}
                    </div>
                    {/* .End .tab-pane */}
                </div>
                {/* End .tab-content */}
                <div className="social-icons">
                    <a href="#" className="social-icon" target="_blank" title="Facebook">
                        <i className="icon-facebook-f" />
                    </a>
                    <a href="#" className="social-icon" target="_blank" title="Twitter">
                        <i className="icon-twitter" />
                    </a>
                    <a href="#" className="social-icon" target="_blank" title="Instagram">
                        <i className="icon-instagram" />
                    </a>
                    <a href="#" className="social-icon" target="_blank" title="Youtube">
                        <i className="icon-youtube" />
                    </a>
                </div>
                {/* End .social-icons */}
            </div>
            {/* End .mobile-menu-wrapper */}
        </div>
    )
}

export default MobileMenu