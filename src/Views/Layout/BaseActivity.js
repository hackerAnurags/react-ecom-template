import React, { useEffect } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import newsletter from "../../Assets/images/popup/newsletter/logo.png"
import newsletter1 from "../../Assets/images/popup/newsletter/img-1.jpg"
import { mobileMenuArrow, mobileMenuToggle } from '../../Java/Main'
import { useLocation } from 'react-router-dom'
import MobileMenu from '../Components/MobileMenu'
import LoginModal from '../Components/LoginModal'
import $ from "jquery"
import Loader from '../Components/Loader'
import { useSelector } from "react-redux"
import Fade from "@mui/material/Fade";



const BaseActivity = ({ children }) => {
    const location = useLocation();
    const loader = useSelector((state) => state.DashboardReducer.loader)

    const menuCloseMobile = () => {
        $('body').removeClass('mmenu-active');
        $('.menu-toggler').removeClass('active');
    }
    useEffect(() => {
        menuCloseMobile();
        mobileMenuArrow();
        mobileMenuToggle();
    }, [location])
    return (
        <>
            <div className="page-wrapper">
                <Header />
                {/* End Header */}

                {loader && <Loader />}

                <div className={loader ? "opacity-15" : ""}>
                    {children}
                </div>
                {/* End Body */}

                <Footer />
                {/* End Footer  */}
            </div>

            <button id="scroll-top" title="Back to Top">
                <i className="icon-arrow-up" />
            </button>
            {/* Mobile Menu */}
            <div className="mobile-menu-overlay" />
            {/* End .mobil-menu-overlay */}
            <MobileMenu />
            {/* End .mobile-menu-container */}
            <LoginModal />
            {/* Sign in / Register Modal */}

            {/* End .modal */}
        </>
    )
}

export default BaseActivity