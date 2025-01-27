import React from 'react'
import errorBg from "../../Assets/images/backgrounds/error-bg.jpg"

const Error = () => {
    return (
        <>
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
                                404
                            </li>
                        </ol>
                    </div>
                    {/* End .container */}
                </nav>
                {/* End .breadcrumb-nav */}
                <div
                    className="error-content text-center"
                    style={{ backgroundImage: `url(${errorBg})` }}
                >
                    <div className="container">
                        <h1 className="error-title">Error 404</h1>
                        {/* End .error-title */}
                        <p>We are sorry, the page you've requested is not available.</p>
                        <a
                            href="index.html"
                            className="btn btn-outline-primary-2 btn-minwidth-lg"
                        >
                            <span>BACK TO HOMEPAGE</span>
                            <i className="icon-long-arrow-right" />
                        </a>
                    </div>
                    {/* End .container */}
                </div>
                {/* End .error-content text-center */}
            </main>
            {/* End .main */}
        </>

    )
}

export default Error