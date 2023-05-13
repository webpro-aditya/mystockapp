import React from 'react'

export default function Nav() {
  return (
    <header>
        <nav className="navbar fixed-top navbar-expand-lg navbar-light">
            <div className="container">
                <a className="navbar-brand showdivoabtn-top" href='index.html'>
                    <img className="w-100-logo" src="assets/images/mirae-logo.svg" alt="m.Stock by Mirae Asset" title="Online Trading - m.Stock by Mirae Asset" />
                </a>
                <a href='open-demat-account.html' className="btn btn-primary mobilevishow-top">Open an Account</a>
                <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="icon-bar top-bar"></span>
                    <span className="icon-bar middle-bar"></span>
                    <span className="icon-bar bottom-bar"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="mob-menu-logo">
                        <a className="navbar-brand" href='index.html'>
                            <img src="content/images/mirae-logo.svg" alt="m.Stock by Mirae Asset" title="Online Trading - m.Stock by Mirae Asset" />
                        </a>
                    </div>
                    <ul className="navbar-nav ml-auto mob-menu-ul">
                        <li className="nav-item">
                            <a className="nav-link" href='about-us.html'> About Us </a>
                        </li>
                        <li className="nav-item">
                            
                            <a className="nav-link" href='pricing.html'> Pricing </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle nav-mob-sow" href="javascript:void(0);" type="button" id="navbar-dropdown-offering" data-toggle="dropdown">Offerings <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" /></svg></a>
                            <a className="nav-link dropdown-toggle nav-desk-sow" href='investment-products.html'>Offerings <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" /></svg></a>
                            <div className="dropdown-menu nav-animate navFadeInUp" aria-labelledby="navbar-dropdown-offering">
                                <a className="dropdown-item dropdown-item-soc mob-view-all-offe" href='investment-products.html'>View All Offerings</a>
                                <a className="dropdown-item dropdown-item-soc" href='ipo.html'>IPO</a>
                                <a className="dropdown-item dropdown-item-course-description" href='equity-trading.html'>Stocks</a>
                                <a className="dropdown-item dropdown-item-additional-information" href='currency-trading.html'>Currency</a>
                                <a className="dropdown-item dropdown-item-additional-information" href='futures-and-options-trading.html'>Futures & Options</a>
                                <a className="dropdown-item dropdown-item-additional-information" href='mutual-fund-investments.html'>Mutual Funds </a>
                                <a className="dropdown-item dropdown-item-soc" href='margin-trading-facility.html'>MTF (eMargin) @ <b className="orange-txt">6.99%</b></a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href='trading-technologies-tools.html'>Technology</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href='refer-and-earn.html'>Refer & Earn</a>
                        </li>
                        <li className="nav-item btn-one des-nav-mob-hide">
                            <a href='open-demat-account.html' className="btn btn-primary">Open an Account</a>
                            <a href="#" className="nav-link mob-login-btn login-btn-menu0" target="_blank" onclick="OpenTrademStock();">Login</a>
                        </li>
                        <li className="nav-item btn-two desk-login-btn des-nav-mob-hide">
                            <a href="#" className="nav-link login-btn-menu0" target="_blank" onclick="OpenTrademStock();">Login</a>
                        </li>
                    </ul>
                    <div className="mob-login-open-ac-section"> 
                        <a href="http://onelink.to/en85gc" target="_blank" className="btn btn-secondary mob-login-btn">Login</a>
                        <a href='open-demat-account.html' className="btn btn-primary">Open an Account</a>
                    </div>
                </div>
            </div>
        </nav>
    </header>
  )
}
