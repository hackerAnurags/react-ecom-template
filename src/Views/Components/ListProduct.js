/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import product4_2 from "../../Assets/images/products/product-4-2-thumb.jpg"
import product4_3 from "../../Assets/images/products/product-4-3-thumb.jpg"
import product4Thumb from "../../Assets/images/products/product-4-thumb.jpg"
import { catList, backgroundProduct } from '../../Utils/CustomList'

const ListProduct = ({ randomNumber, primary_image, special_price, name }) => {
    return (
        <div className="product product-list">
            <div className="row">
                <div className="col-6 col-lg-3">
                    <figure className="product-media">
                        <span className="product-label label-new">New</span>
                        <a style={{ backgroundColor: `${backgroundProduct[randomNumber]}` }}>
                            <img
                                src={primary_image}
                                alt="Product image"
                                className="product-image"
                            />
                        </a>
                    </figure>
                    {/* End .product-media */}
                </div>
                {/* End .col-sm-6 col-lg-3 */}
                <div className="col-6 col-lg-3 order-lg-last">
                    <div className="product-list-action">
                        <div className="product-price"> ₹{special_price}</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                            <div className="ratings">
                                <div className="ratings-val" style={{ width: "28%" }} />
                                {/* End .ratings-val */}
                            </div>
                            {/* End .ratings */}
                            <span className="ratings-text">( 2 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                        <div className="product-action">
                            <a
                                href="popup/quickView.html"
                                className="btn-product btn-quickview"
                                title="Quick view"
                            >
                                <span>quick view</span>
                            </a>
                            <a
                                href="#"
                                className="btn-product btn-compare"
                                title="Compare"
                            >
                                <span>compare</span>
                            </a>
                        </div>
                        {/* End .product-action */}
                        <a href="#" className="btn-product btn-cart">
                            <span>add to cart</span>
                        </a>
                    </div>
                    {/* End .product-list-action */}
                </div>
                {/* End .col-sm-6 col-lg-3 */}
                <div className="col-lg-6">
                    <div className="product-body product-action-inner">
                        <a
                            href="#"
                            className="btn-product btn-wishlist"
                            title="Add to wishlist"
                        >
                            <span>add to wishlist</span>
                        </a>
                        <div className="product-cat">
                            <a href="#">{catList[randomNumber]}</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                            <a href="product.html">
                                {name}
                            </a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-content">
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing
                                elit. Phasellus hendrerit. Pellentesque{" "}
                            </p>
                        </div>
                        {/* End .product-content */}
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
                {/* End .col-lg-6 */}
            </div>
            {/* End .row */}
        </div>
    )
}

export default ListProduct