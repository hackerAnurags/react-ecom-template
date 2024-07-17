/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import product4_2 from "../../Assets/images/products/product-4-2-thumb.jpg"
import product4_3 from "../../Assets/images/products/product-4-3-thumb.jpg"
import product4Thumb from "../../Assets/images/products/product-4-thumb.jpg"
import { catList, backgroundProduct } from "../../Utils/CustomList"

const ThreeColProduct = ({ randomNumber, primary_image, special_price, name }) => {

    return (
        <div className="col-6 col-md-4 col-lg-4">
            <div className="product product-7 text-center">
                <figure className="product-media">
                    <span className="product-label label-new">New</span>
                    <a style={{ backgroundColor: `${backgroundProduct[randomNumber]}` }}>
                        <img
                            src={primary_image}
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
                        <a href="#">{catList[randomNumber]}</a>
                    </div>
                    {/* End .product-cat */}
                    <h3 className="product-title">
                        <a href="product.html">{name}</a>
                    </h3>
                    {/* End .product-title */}
                    <div className="product-price">₹{special_price}</div>
                    {/* End .product-price */}
                    <div className="ratings-container">
                        <div className="ratings">
                            <div className="ratings-val" style={{ width: "60%" }} />
                            {/* End .ratings-val */}
                        </div>
                        {/* End .ratings */}
                        <span className="ratings-text">( 2 Reviews )</span>
                    </div>
                    {/* End .rating-container */}
                    <div className="product-nav product-nav-thumbs">
                        <a href="#" className="active">
                            <img
                                src={product4Thumb}
                                alt="product desc"
                            />
                        </a>
                        <a href="#">
                            <img
                                src={product4_2}
                                alt="product desc"
                            />
                        </a>
                        <a href="#">
                            <img
                                src={product4_3}
                                alt="product desc"
                            />
                        </a>
                    </div>
                    {/* End .product-nav */}
                </div>
                {/* End .product-body */}
            </div>
            {/* End .product */}
        </div>

    )
}

export default ThreeColProduct