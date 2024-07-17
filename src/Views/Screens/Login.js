/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import loginBg from "../../Assets/images/backgrounds/login-bg.jpg";

const Login = () => {
    const [signInState, setSignInState] = useState(1)
    return (
        <main className="main">
            <nav aria-label="breadcrumb" className="breadcrumb-nav border-0 mb-0">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="index.html">Home</a>
                        </li>
                        <li className="breadcrumb-item">
                            <a href="#">Pages</a>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                            Login
                        </li>
                    </ol>
                </div>
                {/* End .container */}
            </nav>
            {/* End .breadcrumb-nav */}
            <div
                className="login-page bg-image pt-8 pb-8 pt-md-12 pb-md-12 pt-lg-17 pb-lg-17"
                style={{ backgroundImage: `url(${loginBg})` }}
            >
                <div className="container">
                    <div className="form-box">
                        <div className="form-tab">
                            <ul className="nav nav-pills nav-fill" role="tablist">
                                <li className="nav-item">
                                    <a
                                        className={signInState === 1 ? "nav-link active" : "nav-link"}
                                        role="tab"
                                        onClick={() => setSignInState(1)}
                                    >
                                        Sign In
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className={signInState === 0 ? "nav-link active" : "nav-link"}
                                        role="tab"
                                        onClick={() => setSignInState(0)}
                                    >
                                        Register
                                    </a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div
                                    className={signInState === 1 ? "tab-pane fade show active" : "tab-pane fade"}
                                    id="signin-2"
                                    role="tabpanel"
                                    aria-labelledby="signin-tab-2"
                                >
                                    <form>
                                        <div className="form-group">
                                            <label htmlFor="singin-email-2">
                                                Username or email address *
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="singin-email-2"
                                                name="singin-email"
                                                required=""
                                            />
                                        </div>
                                        {/* End .form-group */}
                                        <div className="form-group">
                                            <label htmlFor="singin-password-2">Password *</label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="singin-password-2"
                                                name="singin-password"
                                                required=""
                                            />
                                        </div>
                                        {/* End .form-group */}
                                        <div className="form-footer">
                                            <button type="submit" className="btn btn-outline-primary-2">
                                                <span>LOG IN</span>
                                                <i className="icon-long-arrow-right" />
                                            </button>
                                            <div className="custom-control custom-checkbox">
                                                <input
                                                    type="checkbox"
                                                    className="custom-control-input"
                                                    id="signin-remember-2"
                                                />
                                                <label
                                                    className="custom-control-label"
                                                    htmlFor="signin-remember-2"
                                                >
                                                    Remember Me
                                                </label>
                                            </div>
                                            {/* End .custom-checkbox */}
                                            <a href="#" className="forgot-link">
                                                Forgot Your Password?
                                            </a>
                                        </div>
                                        {/* End .form-footer */}
                                    </form>
                                    <div className="form-choice">
                                        <p className="text-center">or sign in with</p>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <a href="#" className="btn btn-login btn-g">
                                                    <i className="icon-google" />
                                                    Login With Google
                                                </a>
                                            </div>
                                            {/* End .col-6 */}
                                            <div className="col-sm-6">
                                                <a href="#" className="btn btn-login btn-f">
                                                    <i className="icon-facebook-f" />
                                                    Login With Facebook
                                                </a>
                                            </div>
                                            {/* End .col-6 */}
                                        </div>
                                        {/* End .row */}
                                    </div>
                                    {/* End .form-choice */}
                                </div>
                                {/* .End .tab-pane */}
                                <div
                                    className={signInState === 0 ? "tab-pane fade show active" : "tab-pane fade"}

                                    id="register-2"
                                    role="tabpanel"
                                    aria-labelledby="register-tab-2"
                                >
                                    <form action="#">
                                        <div className="form-group">
                                            <label htmlFor="register-email-2">Your email address *</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="register-email-2"
                                                name="register-email"
                                                required=""
                                            />
                                        </div>
                                        {/* End .form-group */}
                                        <div className="form-group">
                                            <label htmlFor="register-password-2">Password *</label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="register-password-2"
                                                name="register-password"
                                                required=""
                                            />
                                        </div>
                                        {/* End .form-group */}
                                        <div className="form-footer">
                                            <button type="submit" className="btn btn-outline-primary-2">
                                                <span>SIGN UP</span>
                                                <i className="icon-long-arrow-right" />
                                            </button>
                                            <div className="custom-control custom-checkbox">
                                                <input
                                                    type="checkbox"
                                                    className="custom-control-input"
                                                    id="register-policy-2"
                                                    required=""
                                                />
                                                <label
                                                    className="custom-control-label"
                                                    htmlFor="register-policy-2"
                                                >
                                                    I agree to the <a href="#">privacy policy</a> *
                                                </label>
                                            </div>
                                            {/* End .custom-checkbox */}
                                        </div>
                                        {/* End .form-footer */}
                                    </form>
                                    <div className="form-choice">
                                        <p className="text-center">or sign in with</p>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <a href="#" className="btn btn-login btn-g">
                                                    <i className="icon-google" />
                                                    Login With Google
                                                </a>
                                            </div>
                                            {/* End .col-6 */}
                                            <div className="col-sm-6">
                                                <a href="#" className="btn btn-login  btn-f">
                                                    <i className="icon-facebook-f" />
                                                    Login With Facebook
                                                </a>
                                            </div>
                                            {/* End .col-6 */}
                                        </div>
                                        {/* End .row */}
                                    </div>
                                    {/* End .form-choice */}
                                </div>
                                {/* .End .tab-pane */}
                            </div>
                            {/* End .tab-content */}
                        </div>
                        {/* End .form-tab */}
                    </div>
                    {/* End .form-box */}
                </div>
                {/* End .container */}
            </div>
            {/* End .login-page section-bg */}
        </main>

    )
}

export default Login