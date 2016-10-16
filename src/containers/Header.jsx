import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';

const Header = () => (
    <header className="main-header fixed">
        <div className="header-top">
            <div className="container">
                <div className="row clearfix">
                    <div className="col-md-6 col-sm-6 col-xs-12 top-left">
                        <div className="social-links">
                            <a href="#" className="fa fa-facebook-f"></a>
                            <a href="#" className="fa fa-twitter"></a>
                            <a href="#" className="fa fa-instagram"></a>
                            <a href="#" className="fa fa-youtube-play"></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="header-lower">
            <div className="auto-container">

                <div className="outer">

                    <div className="logo">
                        <a href={FlowRouter.path('Home')}>
                            <img
                                className="normal-image"
                                src="images/logo.png"
                                alt="" />
                            <img
                                className="small-image"
                                src="images/logo-small.png"
                                alt="" />
                        </a>
                    </div>

                    <nav className="main-menu">
                        <div className="navbar-header">
                            <button
                                type="button"
                                className="navbar-toggle"
                                data-toggle="collapse"
                                data-target=".navbar-collapse">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>

                        <div className="navbar-collapse collapse clearfix">
                            <div className="nav-container nav-left">
                                <ul>
                                    <li className="current">
                                        <a href={FlowRouter.path('Home')}>Home</a>
                                    </li>
                                    <li>
                                        <a href={FlowRouter.path('about')}>About</a>
                                    </li>
                                    <li>
                                        <a href={FlowRouter.path('services')}>Services</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="nav-container nav-right">
                                <ul>
                                    <li>
                                        <a href={FlowRouter.path('prices')}>Prices</a>
                                    </li>
                                    <li>
                                        <a href={FlowRouter.path('gallery')}>Gallery</a>
                                    </li>
                                    <li>
                                        <a href={FlowRouter.path('blog')}>Blog</a>
                                    </li>
                                    <li>
                                        <a href={FlowRouter.path('contact')}>Contact</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </nav>

                </div>
            </div>
        </div>
    </header>
);

export default Header;
