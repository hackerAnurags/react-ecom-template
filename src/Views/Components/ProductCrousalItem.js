/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

const Product = ({ primary_image, name, special_price, border }) => {
    return (
        <Wrapper>
            <div className={border === true ? "product product-11 text-center border border-success" : "product product-11 text-center"}>
                <figure className="product-media">
                    <span className="product-label label-circle label-sale">
                        Sale
                    </span>
                    <a>
                        <NavLink to="/productDetail">
                            <img
                                src={primary_image}
                                alt="Product image"
                                className="product-image"
                            />
                        </NavLink>
                    </a>
                    <div className="product-action-vertical">
                        <a
                            href="#"
                            className="btn-product-icon btn-wishlist"
                        >
                            <span>add to wishlist</span>
                        </a>
                    </div>
                    {/* End .product-action-vertical */}
                </figure>
                {/* End .product-media */}
                <div className="product-body">
                    <h3 className="product-title">
                        <a>{name}</a>
                    </h3>
                    {/* End .product-title */}
                    <div className="product-price">
                        ₹{special_price}
                    </div>
                    {/* End .product-price */}
                    <div className="product-nav product-nav-dots">
                        <a
                            href="#"
                            className="active"
                            style={{ background: "#1f1e18" }}
                        >
                            <span className="sr-only">Color name</span>
                        </a>
                        <a href="#" style={{ background: "#e8e8e8" }}>
                            <span className="sr-only">Color name</span>
                        </a>
                    </div>
                    {/* End .product-nav */}
                </div>
                {/* End .product-body */}
                <div className="product-action">
                    <a href="#" className="btn-product btn-cart">
                        <span>add to cart</span>
                    </a>
                </div>
                {/* End .product-action */}
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
.product-title {
    font-weight: 400;
    font-size: 1.6rem;
    letter-spacing: -0.01em;
    color: #333333;
    margin-bottom: 0.2rem;
    white-space: nowrap;
    min-height: 40px;
    overflow: hidden;
    text-overflow: ellipsis;
    @supports (-webkit-line-clamp: 2) {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: initial;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
`;

export default Product