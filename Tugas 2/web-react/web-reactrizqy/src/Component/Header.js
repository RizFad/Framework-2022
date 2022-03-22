import React, {Component} from 'react'

export class Header extends Component{
    render(){
        return(
        <div>
        {/* Preloader */}
        {/* <div className="preloader">
            <div className="preloader-inner">
                <div className="preloader-icon">
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div> */}
        {/* End Preloader */}

        {/* Header */}
        <header className="header shop">
        {/* Topbar */}
        <div className="topbar">
            <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-12 col-12">
                {/* Top Left */}
                <div className="top-left">
                    <ul className="list-main">
                    <li><i className="ti-headphone-alt" /> 0857303211111</li>
                    <li><i className="ti-email" /> maomask@gmail.com</li>
                    </ul>
                </div>
                {/*/ End Top Left */}
                </div>
                <div className="col-lg-8 col-md-12 col-12">
                {/* Top Right */}
                    <div className="right-content">
                        <ul className="list-main">
                        <li><i className="ti-location-pin" /> Store location</li>
                        <li><i className="ti-alarm-clock" />Daily deal</li>
                        <li><a href="/account"><i className="ti-user" />My account</a></li>
                        <li><i className="ti-power-off" /><a href="/login">Login</a></li>
                        </ul>
                    </div>
                {/* End Top Right */}
                </div>
            </div>
            </div>
        </div>
        {/* End Topbar */}
        <div className="middle-inner">
            <div className="container">
            <div className="row">
                <div className="col-lg-2 col-md-2 col-12">
                {/* Logo */}
                {/* <div className="logo">
                    <a href="index.html"><img src="assets/images/logo.png" alt="logo" /></a>
                </div> */}
                {/*/ End Logo */}
                {/* Search Form */}
                <div className="search-top">
                    <div className="top-search"><a href="#0"><i className="ti-search" /></a></div>
                    {/* Search Form */}
                    <div className="search-top">
                    <form className="search-form">
                        <input type="text" placeholder="Search here..." name="search" />
                        <button value="search" type="submit"><i className="ti-search" /></button>
                    </form>
                    </div>
                    {/*/ End Search Form */}
                </div>
                {/*/ End Search Form */}
                <div className="mobile-nav" />
                </div>
                <div className="col-lg-8 col-md-7 col-12">
                <div className="search-bar-top">
                    <div className="search-bar">
                    {/* <select defaultValue={'DEFAULT'}>
                        <option selected="selected" defaultValue ="watch">All Category</option>
                        <option>watch</option>
                        <option>mobile</option>
                        <option>kid’s item</option>
                    </select> */}
                    <form>
                        <input name="search" placeholder="Search Products Here....." type="search" />
                        <button className="btnn"><i className="ti-search" /></button>
                    </form>
                    </div>
                </div>
                </div>
                <div className="col-lg-2 col-md-3 col-12">
                <div className="right-bar">
                    {/* Search Form */}
                    {/* <div className="sinlge-bar">
                    <a href="#" className="single-icon"><i className="fa fa-heart-o" aria-hidden="true" /></a>
                    </div> */}
                    {/* <div className="sinlge-bar">
                    <a href="/account" className="single-icon"><i className="fa fa-user-circle-o" aria-hidden="true" /></a>
                    </div> */}
                    <div className="sinlge-bar shopping">
                    <a href="#" className="single-icon"><i className="ti-bag" /> <span className="total-count">2</span></a>
                    {/* Shopping Item */}
                    <div className="shopping-item">
                        <div className="dropdown-cart-header">
                        <span>2 Items</span>
                        <a href="#">View Cart</a>
                        </div>
                        <ul className="shopping-list">
                        <li>
                            <a href="#" className="remove" title="Remove this item"><i className="fa fa-remove" /></a>
                            <a className="cart-img" href="#"><img src="assets/images/70.png" alt="#" /></a>
                            <h4><a href="#">Bandana</a></h4>
                            <p className="quantity">1x - <span className="amount">Rp. 99.000</span></p>
                        </li>
                        <li>
                            <a href="#" className="remove" title="Remove this item"><i className="fa fa-remove" /></a>
                            <a className="cart-img" href="#"><img src="assets/images/80.jng" alt="#" /></a>
                            <h4><a href="#">Sarung Beton</a></h4>
                            <p className="quantity">1x - <span className="amount">Rp. 35.000.000</span></p>
                        </li>
                        </ul>
                        <div className="bottom">
                        <div className="total">
                            <span>Total</span>
                            <span className="total-amount">Rp. 134.00</span>
                        </div>
                        <a href="/checkout" className="btn animate">Checkout</a>
                        </div>
                    </div>
                    {/*/ End Shopping Item */}
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        {/* Header Inner */}
        <div className="header-inner">
            <div className="container">
            <div className="cat-nav-head">
                <div className="row">
                <div className="col-lg-3">
                    
                </div>
                <div className="col-lg-9 col-12">
                    <div className="menu-area">
                    {/* Main Menu */}
                    <nav className="navbar navbar-expand-lg">
                        <div className="navbar-collapse">	
                        <div className="nav-inner">	
                            <ul className="nav main-menu menu navbar-nav">
                            <li><a href="/">Home</a></li>
                            <li><a href="/products">Product</a></li>												
                            <li><a href="#">Shop<i className="ti-angle-down" /><span className="new">New</span></a>
                                <ul className="dropdown">
                                <li><a href="/shopgrid">Shop Grid</a></li>
                                <li><a href="/cart">Cart</a></li>
                                <li><a href="/checkout">Checkout</a></li>
                                </ul>
                            </li>
                            <li><a href="/service">Service</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                            </ul>
                        </div>
                        </div>
                    </nav>
                    {/*/ End Main Menu */}	
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        {/*/ End Header Inner */}
        </header>
        {/*/ End Header */}
        </div>
        )
    }
}

export default Header