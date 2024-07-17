/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react'
import product1 from "../../Assets/images/products/table/product-1.jpg"
import product2 from "../../Assets/images/products/table/product-2.jpg"
import headerBg from "../../Assets/images/page-header-bg.jpg"
import styled from 'styled-components'

const Cart = () => {
    const [count, setCount] = useState(1);

    return (
        <Wrapper>
            <main className="main">
                <div
                    className="page-header text-center"
                    style={{ backgroundImage: `url(${headerBg})` }}
                >
                    <div className="container">
                        <h1 className="page-title">
                            Shopping Cart<span>Shop</span>
                        </h1>
                    </div>
                    {/* End .container */}
                </div>
                {/* End .page-header */}
                <nav aria-label="breadcrumb" className="breadcrumb-nav">
                    <div className="container">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="index.html">Home</a>
                            </li>
                            <li className="breadcrumb-item">
                                <a href="#">Shop</a>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">
                                Shopping Cart
                            </li>
                        </ol>
                    </div>
                    {/* End .container */}
                </nav>
                {/* End .breadcrumb-nav */}
                <div className="page-content">
                    <div className="cart">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-9">
                                    <table className="table table-cart table-mobile">
                                        <thead>
                                            <tr>
                                                <th>Product</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th>Total</th>
                                                <th />
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="product-col">
                                                    <div className="product">
                                                        <figure className="product-media">
                                                            <a href="#">
                                                                <img
                                                                    src={product1}
                                                                    alt="Product image"
                                                                />
                                                            </a>
                                                        </figure>
                                                        <h3 className="product-title">
                                                            <a href="#">Beige knitted elastic runner shoes</a>
                                                        </h3>
                                                        {/* End .product-title */}
                                                    </div>
                                                    {/* End .product */}
                                                </td>
                                                <td className="price-col">$84.00</td>
                                                <td className="quantity-col">
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
                                                    {/* End .cart-product-quantity */}
                                                </td>
                                                <td className="total-col">$84.00</td>
                                                <td className="remove-col">
                                                    <button className="btn-remove">
                                                        <i className="icon-close" />
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="product-col">
                                                    <div className="product">
                                                        <figure className="product-media">
                                                            <a href="#">
                                                                <img
                                                                    src={product2}
                                                                    alt="Product image"
                                                                />
                                                            </a>
                                                        </figure>
                                                        <h3 className="product-title">
                                                            <a href="#">Blue utility pinafore denim dress</a>
                                                        </h3>
                                                        {/* End .product-title */}
                                                    </div>
                                                    {/* End .product */}
                                                </td>
                                                <td className="price-col">$76.00</td>
                                                <td className="quantity-col">
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
                                                    {/* End .cart-product-quantity */}
                                                </td>
                                                <td className="total-col">$76.00</td>
                                                <td className="remove-col">
                                                    <button className="btn-remove">
                                                        <i className="icon-close" />
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    {/* End .table table-wishlist */}
                                    <div className="cart-bottom">
                                        <div className="cart-discount">
                                            <form action="#">
                                                <div className="input-group">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        required=""
                                                        placeholder="coupon code"
                                                    />
                                                    <div className="input-group-append">
                                                        <button
                                                            className="btn btn-outline-primary-2"
                                                            type="submit"
                                                        >
                                                            <i className="icon-long-arrow-right" />
                                                        </button>
                                                    </div>
                                                    {/* .End .input-group-append */}
                                                </div>
                                                {/* End .input-group */}
                                            </form>
                                        </div>
                                        {/* End .cart-discount */}
                                        <a href="#" className="btn btn-outline-dark-2">
                                            <span>UPDATE CART</span>
                                            <i className="icon-refresh" />
                                        </a>
                                    </div>
                                    {/* End .cart-bottom */}
                                </div>
                                {/* End .col-lg-9 */}
                                <aside className="col-lg-3">
                                    <div className="summary summary-cart">
                                        <h3 className="summary-title">Cart Total</h3>
                                        {/* End .summary-title */}
                                        <table className="table table-summary">
                                            <tbody>
                                                <tr className="summary-subtotal">
                                                    <td>Subtotal:</td>
                                                    <td>$160.00</td>
                                                </tr>
                                                {/* End .summary-subtotal */}
                                                <tr className="summary-shipping">
                                                    <td>Shipping:</td>
                                                    <td>&nbsp;</td>
                                                </tr>
                                                <tr className="summary-shipping-row">
                                                    <td>
                                                        <div className="custom-control custom-radio">
                                                            <input
                                                                type="radio"
                                                                id="free-shipping"
                                                                name="shipping"
                                                                className="custom-control-input"
                                                            />
                                                            <label
                                                                className="custom-control-label"
                                                                htmlFor="free-shipping"
                                                            >
                                                                Free Shipping
                                                            </label>
                                                        </div>
                                                        {/* End .custom-control */}
                                                    </td>
                                                    <td>$0.00</td>
                                                </tr>
                                                {/* End .summary-shipping-row */}
                                                <tr className="summary-shipping-row">
                                                    <td>
                                                        <div className="custom-control custom-radio">
                                                            <input
                                                                type="radio"
                                                                id="standart-shipping"
                                                                name="shipping"
                                                                className="custom-control-input"
                                                            />
                                                            <label
                                                                className="custom-control-label"
                                                                htmlFor="standart-shipping"
                                                            >
                                                                Standart:
                                                            </label>
                                                        </div>
                                                        {/* End .custom-control */}
                                                    </td>
                                                    <td>$10.00</td>
                                                </tr>
                                                {/* End .summary-shipping-row */}
                                                <tr className="summary-shipping-row">
                                                    <td>
                                                        <div className="custom-control custom-radio">
                                                            <input
                                                                type="radio"
                                                                id="express-shipping"
                                                                name="shipping"
                                                                className="custom-control-input"
                                                            />
                                                            <label
                                                                className="custom-control-label"
                                                                htmlFor="express-shipping"
                                                            >
                                                                Express:
                                                            </label>
                                                        </div>
                                                        {/* End .custom-control */}
                                                    </td>
                                                    <td>$20.00</td>
                                                </tr>
                                                {/* End .summary-shipping-row */}
                                                <tr className="summary-shipping-estimate">
                                                    <td>
                                                        Estimate for Your Country
                                                        <br /> <a href="dashboard.html">Change address</a>
                                                    </td>
                                                    <td>&nbsp;</td>
                                                </tr>
                                                {/* End .summary-shipping-estimate */}
                                                <tr className="summary-total">
                                                    <td>Total:</td>
                                                    <td>$160.00</td>
                                                </tr>
                                                {/* End .summary-total */}
                                            </tbody>
                                        </table>
                                        {/* End .table table-summary */}
                                        <a
                                            href="checkout.html"
                                            className="btn btn-outline-primary-2 btn-order btn-block"
                                        >
                                            PROCEED TO CHECKOUT
                                        </a>
                                    </div>
                                    {/* End .summary */}
                                    <a
                                        href="category.html"
                                        className="btn btn-outline-dark-2 btn-block mb-3"
                                    >
                                        <span>CONTINUE SHOPPING</span>
                                        <i className="icon-refresh" />
                                    </a>
                                </aside>
                                {/* End .col-lg-3 */}
                            </div>
                            {/* End .row */}
                        </div>
                        {/* End .container */}
                    </div>
                    {/* End .cart */}
                </div>
                {/* End .page-content */}
            </main>
            {/* End .main */}
        </Wrapper>

    )
}

const Wrapper = styled.section`
  .form-control1 {
    height: 40px;
    width: 100px;
    font-size: 1.4rem;
    line-height: 1.5;
    font-weight: 300;
    display: flex;
    align-self: center;
    align-items: center;
    justify-content: center;
    color: #777;
    background-color: #fafafa;
    border: 1px solid #ebebeb;
    border-radius: 0;
    box-shadow: none;
  }
`;
export default Cart