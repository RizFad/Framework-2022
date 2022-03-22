import React, { Component} from 'react';   

export class Trending extends Component {  
    render() {  
        return (  
            <div>  
                {/* Start Product Area */}
                <div className="product-area section">
                <div className="container">
                    <div className="row">
                    <div className="col-12">
                        <div className="section-title">
                        <h2>Trending Item</h2>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-12">
                        <div className="product-info">
                        <div className="nav-main">
                            {/* Tab Nav */}
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#man" role="tab">Man</a></li>
                            <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#Men" role="tab">Woman</a></li>
                            <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#kids" role="tab">Kids</a></li>
                            <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#accessories" role="tab">Accessories</a></li>
                            <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#essential" role="tab">Essential</a></li>
                            <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#prices" role="tab">Prices</a></li>
                            </ul>
                            {/*/ End Tab Nav */}
                        </div>
                        <div className="tab-content" id="myTabContent">
                            {/* Start Single Tab */}
                            <div className="tab-pane fade show active" id="man" role="tabpanel">
                            <div className="tab-single">
                                <div className="row">
                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                    <div className="single-product">
                                    <div className="product-img">
                                        <a href="/">
                                        <img className="default-img" src="assets/images/men.png" alt="#" />
                                        <img className="hover-img" src="assets/images/menblur.png" alt="#" />
                                        </a>
                                        <div className="button-head">
                                        <div className="product-action">
                                            <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="/"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                            <a title="Wishlist" href="/"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                            <a title="Compare" href="/"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                        </div>
                                        <div className="product-action-2">
                                            <a title="Add to cart" href="/">Add to cart</a>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h3><a href="/">Men Hot Collection</a></h3>
                                        <div className="product-price">
                                        <span>Rp. 100.000</span>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                    <div className="single-product">
                                    <div className="product-img">
                                        <a href="/">
                                        <img className="default-img" src="assets/images/men.png" alt="#" />
                                        <img className="hover-img" src="assets/images/menblur.png" alt="#" />

                                        </a>
                                        <div className="button-head">
                                        <div className="product-action">
                                            <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="/"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                            <a title="Wishlist" href="/"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                            <a title="Compare" href="/"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                        </div>
                                        <div className="product-action-2">
                                            <a title="Add to cart" href="/">Add to cart</a>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h3><a href="/">Awesome Pink Show</a></h3>
                                        <div className="product-price">
                                        <span>Rp. 100.000</span>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                    <div className="single-product">
                                    <div className="product-img">
                                        <a href="/">
                                        <img className="default-img" src="assets/images/men.png" alt="#" />
                                        <img className="hover-img" src="assets/images/menblur.png" alt="#" />

                                        </a>
                                        <div className="button-head">
                                        <div className="product-action">
                                            <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="/"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                            <a title="Wishlist" href="/"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                            <a title="Compare" href="/"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                        </div>
                                        <div className="product-action-2">
                                            <a title="Add to cart" href="/">Add to cart</a>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h3><a href="/">Awesome Bags Collection</a></h3>
                                        <div className="product-price">
                                        <span>Rp. 100.000</span>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                    <div className="single-product">
                                    <div className="product-img">
                                        <a href="/">
                                        <img className="default-img" src="assets/images/men.png" alt="#" />

                                        <img className="hover-img" src="assets/images/menblur.png" alt="#" />

                                        <span className="new">New</span>
                                        </a>
                                        <div className="button-head">
                                        <div className="product-action">
                                            <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="/"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                            <a title="Wishlist" href="/"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                            <a title="Compare" href="/"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                        </div>
                                        <div className="product-action-2">
                                            <a title="Add to cart" href="/">Add to cart</a>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h3><a href="/">Men Pant Collectons</a></h3>
                                        <div className="product-price">
                                        <span>Rp. 100.000</span>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                    <div className="single-product">
                                    <div className="product-img">
                                        <a href="/">
                                        <img className="default-img" src="assets/images/men.png" alt="#" />

                                        <img className="hover-img" src="assets/images/menblur.png" alt="#" />

                                        </a>
                                        <div className="button-head">
                                        <div className="product-action">
                                            <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="/"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                            <a title="Wishlist" href="/"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                            <a title="Compare" href="/"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                        </div>
                                        <div className="product-action-2">
                                            <a title="Add to cart" href="/">Add to cart</a>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h3><a href="/">Awesome Bags Collection</a></h3>
                                        <div className="product-price">
                                        <span>Rp. 100.000</span>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                    <div className="single-product">
                                    <div className="product-img">
                                        <a href="/">
                                        <img className="default-img" src="assets/images/men.png" alt="#" />

                                        <img className="hover-img" src="assets/images/menblur.png" alt="#" />

                                        </a>
                                        <div className="button-head">
                                        <div className="product-action">
                                            <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="/"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                            <a title="Wishlist" href="/"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                            <a title="Compare" href="/"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                        </div>
                                        <div className="product-action-2">
                                            <a title="Add to cart" href="/">Add to cart</a>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h3><a href="/">Awesome Cap For Men</a></h3>
                                        <div className="product-price">
                                        <span>Rp. 100.000</span>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                    <div className="single-product">
                                    <div className="product-img">
                                        <a href="/">
                                        <img className="default-img" src="assets/images/men.png" alt="#" />

                                        <img className="hover-img" src="assets/images/menblur.png" alt="#" />

                                        </a>
                                        <div className="button-head">
                                        <div className="product-action">
                                            <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="/"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                            <a title="Wishlist" href="/"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                            <a title="Compare" href="/"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                        </div>
                                        <div className="product-action-2">
                                            <a title="Add to cart" href="/">Add to cart</a>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h3><a href="/">Polo Dress For Men</a></h3>
                                        <div className="product-price">
                                        <span>Rp. 100.000</span>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                    <div className="single-product">
                                    <div className="product-img">
                                        <a href="/">
                                        <img className="default-img" src="assets/images/men.png" alt="#" />

                                        <img className="hover-img" src="assets/images/menblur.png" alt="#" />

                                        <span className="out-of-stock">Hot</span>
                                        </a>
                                        <div className="button-head">
                                        <div className="product-action">
                                            <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="/"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                            <a title="Wishlist" href="/"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                            <a title="Compare" href="/"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                        </div>
                                        <div className="product-action-2">
                                            <a title="Add to cart" href="/">Add to cart</a>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h3><a href="/">Black Sunglass For Men</a></h3>
                                        <div className="product-price">
                                        <span className="old">Rp. 60.00</span>
                                        <span>Rp. 50.00</span>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            {/*/ End Single Tab */}
                            {/* Start Single Tab */}
                            <div className="tab-pane fade" id="Men" role="tabpanel">
                            <div className="tab-single">
                                <div className="row">
                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                    <div className="single-product">
                                    <div className="product-img">
                                        <a href="/">
                                        <img className="default-img" src="assets/images/men.png" alt="#" />

                                        <img className="hover-img" src="assets/images/menblur.png" alt="#" />

                                        </a>
                                        <div className="button-head">
                                        <div className="product-action">
                                            <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="/"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                            <a title="Wishlist" href="/"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                            <a title="Compare" href="/"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                        </div>
                                        <div className="product-action-2">
                                            <a title="Add to cart" href="/">Add to cart</a>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h3><a href="/">Men Hot Collection</a></h3>
                                        <div className="product-price">
                                        <span>Rp. 100.000</span>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                    <div className="single-product">
                                    <div className="product-img">
                                        <a href="/">
                                        <img className="default-img" src="assets/images/men.png" alt="#" />

                                        <img className="hover-img" src="assets/images/menblur.png" alt="#" />

                                        </a>
                                        <div className="button-head">
                                        <div className="product-action">
                                            <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="/"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                            <a title="Wishlist" href="/"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                            <a title="Compare" href="/"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                        </div>
                                        <div className="product-action-2">
                                            <a title="Add to cart" href="/">Add to cart</a>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h3><a href="/">Awesome Pink Show</a></h3>
                                        <div className="product-price">
                                        <span>Rp. 100.000</span>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                    <div className="single-product">
                                    <div className="product-img">
                                        <a href="/">
                                        <img className="default-img" src="assets/images/men.png" alt="#" />

                                        <img className="hover-img" src="assets/images/menblur.png" alt="#" />

                                        </a>
                                        <div className="button-head">
                                        <div className="product-action">
                                            <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="/"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                            <a title="Wishlist" href="/"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                            <a title="Compare" href="/"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                        </div>
                                        <div className="product-action-2">
                                            <a title="Add to cart" href="/">Add to cart</a>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h3><a href="/">Awesome Bags Collection</a></h3>
                                        <div className="product-price">
                                        <span>Rp. 100.000</span>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                    <div className="single-product">
                                    <div className="product-img">
                                        <a href="/">
                                        <img className="default-img" src="assets/images/men.png" alt="#" />

                                        <img className="hover-img" src="assets/images/menblur.png" alt="#" />

                                        <span className="new">New</span>
                                        </a>
                                        <div className="button-head">
                                        <div className="product-action">
                                            <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="/"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                            <a title="Wishlist" href="/"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                            <a title="Compare" href="/"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                        </div>
                                        <div className="product-action-2">
                                            <a title="Add to cart" href="/">Add to cart</a>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h3><a href="/">Men Pant Collectons</a></h3>
                                        <div className="product-price">
                                        <span>Rp. 100.000</span>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                    <div className="single-product">
                                    <div className="product-img">
                                        <a href="/">
                                        <img className="default-img" src="assets/images/men.png" alt="#" />

                                        <img className="hover-img" src="assets/images/menblur.png" alt="#" />

                                        </a>
                                        <div className="button-head">
                                        <div className="product-action">
                                            <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="/"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                            <a title="Wishlist" href="/"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                            <a title="Compare" href="/"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                        </div>
                                        <div className="product-action-2">
                                            <a title="Add to cart" href="/">Add to cart</a>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h3><a href="/">Awesome Bags Collection</a></h3>
                                        <div className="product-price">
                                        <span>Rp. 100.000</span>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                    <div className="single-product">
                                    <div className="product-img">
                                        <a href="/">
                                        <img className="default-img" src="assets/images/men.png" alt="#" />

                                        <img className="hover-img" src="assets/images/menblur.png" alt="#" />

                                        <span className="price-dec">30% Off</span>
                                        </a>
                                        <div className="button-head">
                                        <div className="product-action">
                                            <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="/"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                            <a title="Wishlist" href="/"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                            <a title="Compare" href="/"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                        </div>
                                        <div className="product-action-2">
                                            <a title="Add to cart" href="/">Add to cart</a>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h3><a href="/">Awesome Cap For Men</a></h3>
                                        <div className="product-price">
                                        <span>Rp. 100.000</span>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                    <div className="single-product">
                                    <div className="product-img">
                                        <a href="/">
                                        <img className="default-img" src="assets/images/men.png" alt="#" />

                                        <img className="hover-img" src="assets/images/menblur.png" alt="#" />

                                        </a>
                                        <div className="button-head">
                                        <div className="product-action">
                                            <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="/"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                            <a title="Wishlist" href="/"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                            <a title="Compare" href="/"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                        </div>
                                        <div className="product-action-2">
                                            <a title="Add to cart" href="/">Add to cart</a>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h3><a href="/">Polo Dress For Men</a></h3>
                                        <div className="product-price">
                                        <span>Rp. 100.000</span>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                    <div className="single-product">
                                    <div className="product-img">
                                        <a href="/">
                                        <img className="default-img" src="assets/images/men.png" alt="#" />

                                        <img className="hover-img" src="assets/images/menblur.png" alt="#" />

                                        <span className="out-of-stock">Hot</span>
                                        </a>
                                        <div className="button-head">
                                        <div className="product-action">
                                            <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="/"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                            <a title="Wishlist" href="/"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                            <a title="Compare" href="/"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                        </div>
                                        <div className="product-action-2">
                                            <a title="Add to cart" href="/">Add to cart</a>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h3><a href="/">Black Sunglass For Men</a></h3>
                                        <div className="product-price">
                                        <span className="old">Rp. 60.00</span>
                                        <span>Rp. 50.00</span>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            {/*/ End Single Tab */}
                            {/* Start Single Tab */}
                            <div className="tab-pane fade" id="kids" role="tabpanel">
                            <div className="tab-single">
                                <div className="row">
                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                    <div className="single-product">
                                    <div className="product-img">
                                        <a href="/">
                                        <img className="default-img" src="assets/images/men.png" alt="#" />

                                        <img className="hover-img" src="assets/images/menblur.png" alt="#" />

                                        </a>
                                        <div className="button-head">
                                        <div className="product-action">
                                            <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="/"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                            <a title="Wishlist" href="/"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                            <a title="Compare" href="/"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                        </div>
                                        <div className="product-action-2">
                                            <a title="Add to cart" href="/">Add to cart</a>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h3><a href="/">Men Hot Collection</a></h3>
                                        <div className="product-price">
                                        <span>Rp. 100.000</span>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                    <div className="single-product">
                                    <div className="product-img">
                                        <a href="/">
                                        <img className="default-img" src="assets/images/men.png" alt="#" />

                                        <img className="hover-img" src="assets/images/menblur.png" alt="#" />

                                        </a>
                                        <div className="button-head">
                                        <div className="product-action">
                                            <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="/"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                            <a title="Wishlist" href="/"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                            <a title="Compare" href="/"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                        </div>
                                        <div className="product-action-2">
                                            <a title="Add to cart" href="/">Add to cart</a>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h3><a href="/">Awesome Pink Show</a></h3>
                                        <div className="product-price">
                                        <span>Rp. 100.000</span>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                    <div className="single-product">
                                    <div className="product-img">
                                        <a href="/">
                                        <img className="default-img" src="assets/images/men.png" alt="#" />

                                        <img className="hover-img" src="assets/images/menblur.png" alt="#" />

                                        </a>
                                        <div className="button-head">
                                        <div className="product-action">
                                            <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="/"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                            <a title="Wishlist" href="/"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                            <a title="Compare" href="/"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                        </div>
                                        <div className="product-action-2">
                                            <a title="Add to cart" href="/">Add to cart</a>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h3><a href="/">Awesome Bags Collection</a></h3>
                                        <div className="product-price">
                                        <span>Rp. 100.000</span>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                    <div className="single-product">
                                    <div className="product-img">
                                        <a href="/">
                                        <img className="default-img" src="assets/images/men.png" alt="#" />

                                        <img className="hover-img" src="assets/images/menblur.png" alt="#" />

                                        <span className="new">New</span>
                                        </a>
                                        <div className="button-head">
                                        <div className="product-action">
                                            <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="/"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                            <a title="Wishlist" href="/"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                            <a title="Compare" href="/"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                        </div>
                                        <div className="product-action-2">
                                            <a title="Add to cart" href="/">Add to cart</a>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h3><a href="/">Men Pant Collectons</a></h3>
                                        <div className="product-price">
                                        <span>Rp. 100.000</span>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                    <div className="single-product">
                                    <div className="product-img">
                                        <a href="/">
                                        <img className="default-img" src="assets/images/men.png" alt="#" />

                                        <img className="hover-img" src="assets/images/menblur.png" alt="#" />

                                        </a>
                                        <div className="button-head">
                                        <div className="product-action">
                                            <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="/"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                            <a title="Wishlist" href="/"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                            <a title="Compare" href="/"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                        </div>
                                        <div className="product-action-2">
                                            <a title="Add to cart" href="/">Add to cart</a>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h3><a href="/">Awesome Bags Collection</a></h3>
                                        <div className="product-price">
                                        <span>Rp. 100.000</span>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                    <div className="single-product">
                                    <div className="product-img">
                                        <a href="/">
                                        <img className="default-img" src="assets/images/men.png" alt="#" />

                                        <img className="hover-img" src="assets/images/menblur.png" alt="#" />

                                        <span className="price-dec">30% Off</span>
                                        </a>
                                        <div className="button-head">
                                        <div className="product-action">
                                            <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="/"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                            <a title="Wishlist" href="/"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                            <a title="Compare" href="/"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                        </div>
                                        <div className="product-action-2">
                                            <a title="Add to cart" href="/">Add to cart</a>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h3><a href="/">Awesome Cap For Men</a></h3>
                                        <div className="product-price">
                                        <span>Rp. 100.000</span>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                    <div className="single-product">
                                    <div className="product-img">
                                        <a href="/">
                                        <img className="default-img" src="assets/images/men.png" alt="#" />

                                        <img className="hover-img" src="assets/images/menblur.png" alt="#" />

                                        </a>
                                        <div className="button-head">
                                        <div className="product-action">
                                            <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="/"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                            <a title="Wishlist" href="/"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                            <a title="Compare" href="/"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                        </div>
                                        <div className="product-action-2">
                                            <a title="Add to cart" href="/">Add to cart</a>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h3><a href="/">Polo Dress For Men</a></h3>
                                        <div className="product-price">
                                        <span>Rp. 100.000</span>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                    <div className="single-product">
                                    <div className="product-img">
                                        <a href="/">
                                        <img className="default-img" src="assets/images/men.png" alt="#" />

                                        <img className="hover-img" src="assets/images/menblur.png" alt="#" />

                                        <span className="out-of-stock">Hot</span>
                                        </a>
                                        <div className="button-head">
                                        <div className="product-action">
                                            <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="/"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                            <a title="Wishlist" href="/"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                            <a title="Compare" href="/"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                        </div>
                                        <div className="product-action-2">
                                            <a title="Add to cart" href="/">Add to cart</a>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h3><a href="/">Black Sunglass For Men</a></h3>
                                        <div className="product-price">
                                        <span className="old">Rp. 60.00</span>
                                        <span>Rp. 50.00</span>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            {/*/ End Single Tab */}
                            {/* Start Single Tab */}
                            <div className="tab-pane fade" id="accessories" role="tabpanel">
                            <div className="tab-single">
                                <div className="row">
                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                    <div className="single-product">
                                    <div className="product-img">
                                        <a href="/">
                                        <img className="default-img" src="assets/images/men.png" alt="#" />

                                        <img className="hover-img" src="assets/images/menblur.png" alt="#" />

                                        </a>
                                        <div className="button-head">
                                        <div className="product-action">
                                            <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="/"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                            <a title="Wishlist" href="/"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                            <a title="Compare" href="/"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                        </div>
                                        <div className="product-action-2">
                                            <a title="Add to cart" href="/">Add to cart</a>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h3><a href="/">Men Hot Collection</a></h3>
                                        <div className="product-price">
                                        <span>Rp. 100.000</span>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                    <div className="single-product">
                                    <div className="product-img">
                                        <a href="/">
                                        <img className="default-img" src="assets/images/men.png" alt="#" />

                                        <img className="hover-img" src="assets/images/menblur.png" alt="#" />

                                        </a>
                                        <div className="button-head">
                                        <div className="product-action">
                                            <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="/"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                            <a title="Wishlist" href="/"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                            <a title="Compare" href="/"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                        </div>
                                        <div className="product-action-2">
                                            <a title="Add to cart" href="/">Add to cart</a>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h3><a href="/">Awesome Pink Show</a></h3>
                                        <div className="product-price">
                                        <span>Rp. 100.000</span>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                    <div className="single-product">
                                    <div className="product-img">
                                        <a href="/">
                                        <img className="default-img" src="assets/images/men.png" alt="#" />

                                        <img className="hover-img" src="assets/images/menblur.png" alt="#" />

                                        </a>
                                        <div className="button-head">
                                        <div className="product-action">
                                            <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="/"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                            <a title="Wishlist" href="/"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                            <a title="Compare" href="/"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                        </div>
                                        <div className="product-action-2">
                                            <a title="Add to cart" href="/">Add to cart</a>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h3><a href="/">Awesome Bags Collection</a></h3>
                                        <div className="product-price">
                                        <span>Rp. 100.000</span>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                    <div className="single-product">
                                    <div className="product-img">
                                        <a href="/">
                                        <img className="default-img" src="assets/images/men.png" alt="#" />

                                        <img className="hover-img" src="assets/images/menblur.png" alt="#" />

                                        <span className="new">New</span>
                                        </a>
                                        <div className="button-head">
                                        <div className="product-action">
                                            <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="/"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                            <a title="Wishlist" href="/"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                            <a title="Compare" href="/"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                        </div>
                                        <div className="product-action-2">
                                            <a title="Add to cart" href="/">Add to cart</a>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h3><a href="/">Men Pant Collectons</a></h3>
                                        <div className="product-price">
                                        <span>Rp. 100.000</span>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                    <div className="single-product">
                                    <div className="product-img">
                                        <a href="/">
                                        <img className="default-img" src="assets/images/men.png" alt="#" />

                                        <img className="hover-img" src="assets/images/menblur.png" alt="#" />

                                        </a>
                                        <div className="button-head">
                                        <div className="product-action">
                                            <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="/"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                            <a title="Wishlist" href="/"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                            <a title="Compare" href="/"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                        </div>
                                        <div className="product-action-2">
                                            <a title="Add to cart" href="/">Add to cart</a>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h3><a href="/">Awesome Bags Collection</a></h3>
                                        <div className="product-price">
                                        <span>Rp. 100.000</span>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                    <div className="single-product">
                                    <div className="product-img">
                                        <a href="/">
                                        <img className="default-img" src="assets/images/men.png" alt="#" />

                                        <img className="hover-img" src="assets/images/menblur.png" alt="#" />

                                        <span className="price-dec">30% Off</span>
                                        </a>
                                        <div className="button-head">
                                        <div className="product-action">
                                            <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="/"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                            <a title="Wishlist" href="/"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                            <a title="Compare" href="/"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                        </div>
                                        <div className="product-action-2">
                                            <a title="Add to cart" href="/">Add to cart</a>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h3><a href="/">Awesome Cap For Men</a></h3>
                                        <div className="product-price">
                                        <span>Rp. 100.000</span>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                    <div className="single-product">
                                    <div className="product-img">
                                        <a href="/">
                                        <img className="default-img" src="assets/images/men.png" alt="#" />

                                        <img className="hover-img" src="assets/images/menblur.png" alt="#" />

                                        </a>
                                        <div className="button-head">
                                        <div className="product-action">
                                            <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="/"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                            <a title="Wishlist" href="/"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                            <a title="Compare" href="/"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                        </div>
                                        <div className="product-action-2">
                                            <a title="Add to cart" href="/">Add to cart</a>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h3><a href="/">Polo Dress For Men</a></h3>
                                        <div className="product-price">
                                        <span>Rp. 100.000</span>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                    <div className="single-product">
                                    <div className="product-img">
                                        <a href="/">
                                        <img className="default-img" src="assets/images/men.png" alt="#" />

                                        <img className="hover-img" src="assets/images/menblur.png" alt="#" />

                                        <span className="out-of-stock">Hot</span>
                                        </a>
                                        <div className="button-head">
                                        <div className="product-action">
                                            <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="/"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                            <a title="Wishlist" href="/"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                            <a title="Compare" href="/"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                        </div>
                                        <div className="product-action-2">
                                            <a title="Add to cart" href="/">Add to cart</a>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h3><a href="/">Black Sunglass For Men</a></h3>
                                        <div className="product-price">
                                        <span className="old">Rp. 60.00</span>
                                        <span>Rp. 50.00</span>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            {/*/ End Single Tab */}
                            {/* Start Single Tab */}
                            <div className="tab-pane fade" id="essential" role="tabpanel">
                            <div className="tab-single">
                                <div className="row">
                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                    <div className="single-product">
                                    <div className="product-img">
                                        <a href="/">
                                        <img className="default-img" src="assets/images/men.png" alt="#" />

                                        <img className="hover-img" src="assets/images/menblur.png" alt="#" />

                                        </a>
                                        <div className="button-head">
                                        <div className="product-action">
                                            <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="/"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                            <a title="Wishlist" href="/"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                            <a title="Compare" href="/"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                        </div>
                                        <div className="product-action-2">
                                            <a title="Add to cart" href="/">Add to cart</a>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h3><a href="/">Men Hot Collection</a></h3>
                                        <div className="product-price">
                                        <span>Rp. 100.000</span>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                    <div className="single-product">
                                    <div className="product-img">
                                        <a href="/">
                                        <img className="default-img" src="assets/images/men.png" alt="#" />

                                        <img className="hover-img" src="assets/images/menblur.png" alt="#" />

                                        </a>
                                        <div className="button-head">
                                        <div className="product-action">
                                            <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="/"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                            <a title="Wishlist" href="/"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                            <a title="Compare" href="/"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                        </div>
                                        <div className="product-action-2">
                                            <a title="Add to cart" href="/">Add to cart</a>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h3><a href="/">Awesome Pink Show</a></h3>
                                        <div className="product-price">
                                        <span>Rp. 100.000</span>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                    <div className="single-product">
                                    <div className="product-img">
                                        <a href="/">
                                        <img className="default-img" src="assets/images/men.png" alt="#" />

                                        <img className="hover-img" src="assets/images/menblur.png" alt="#" />

                                        </a>
                                        <div className="button-head">
                                        <div className="product-action">
                                            <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="/"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                            <a title="Wishlist" href="/"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                            <a title="Compare" href="/"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                        </div>
                                        <div className="product-action-2">
                                            <a title="Add to cart" href="/">Add to cart</a>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h3><a href="/">Awesome Bags Collection</a></h3>
                                        <div className="product-price">
                                        <span>Rp. 100.000</span>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                    <div className="single-product">
                                    <div className="product-img">
                                        <a href="/">
                                        <img className="default-img" src="assets/images/men.png" alt="#" />

                                        <img className="hover-img" src="assets/images/menblur.png" alt="#" />

                                        <span className="new">New</span>
                                        </a>
                                        <div className="button-head">
                                        <div className="product-action">
                                            <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="/"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                            <a title="Wishlist" href="/"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                            <a title="Compare" href="/"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                        </div>
                                        <div className="product-action-2">
                                            <a title="Add to cart" href="/">Add to cart</a>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h3><a href="/">Men Pant Collectons</a></h3>
                                        <div className="product-price">
                                        <span>Rp. 100.000</span>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                    <div className="single-product">
                                    <div className="product-img">
                                        <a href="/">
                                        <img className="default-img" src="assets/images/men.png" alt="#" />

                                        <img className="hover-img" src="assets/images/menblur.png" alt="#" />

                                        </a>
                                        <div className="button-head">
                                        <div className="product-action">
                                            <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="/"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                            <a title="Wishlist" href="/"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                            <a title="Compare" href="/"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                        </div>
                                        <div className="product-action-2">
                                            <a title="Add to cart" href="/">Add to cart</a>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h3><a href="/">Awesome Bags Collection</a></h3>
                                        <div className="product-price">
                                        <span>Rp. 100.000</span>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                    <div className="single-product">
                                    <div className="product-img">
                                        <a href="/">
                                        <img className="default-img" src="assets/images/men.png" alt="#" />

                                        <img className="hover-img" src="assets/images/menblur.png" alt="#" />

                                        <span className="price-dec">30% Off</span>
                                        </a>
                                        <div className="button-head">
                                        <div className="product-action">
                                            <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="/"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                            <a title="Wishlist" href="/"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                            <a title="Compare" href="/"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                        </div>
                                        <div className="product-action-2">
                                            <a title="Add to cart" href="/">Add to cart</a>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h3><a href="/">Awesome Cap For Men</a></h3>
                                        <div className="product-price">
                                        <span>Rp. 100.000</span>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                    <div className="single-product">
                                    <div className="product-img">
                                        <a href="/">
                                        <img className="default-img" src="assets/images/men.png" alt="#" />

                                        <img className="hover-img" src="assets/images/menblur.png" alt="#" />

                                        </a>
                                        <div className="button-head">
                                        <div className="product-action">
                                            <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="/"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                            <a title="Wishlist" href="/"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                            <a title="Compare" href="/"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                        </div>
                                        <div className="product-action-2">
                                            <a title="Add to cart" href="/">Add to cart</a>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h3><a href="/">Polo Dress For Men</a></h3>
                                        <div className="product-price">
                                        <span>Rp. 100.000</span>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                    <div className="single-product">
                                    <div className="product-img">
                                        <a href="/">
                                        <img className="default-img" src="assets/images/men.png" alt="#" />

                                        <img className="hover-img" src="assets/images/menblur.png" alt="#" />

                                        <span className="out-of-stock">Hot</span>
                                        </a>
                                        <div className="button-head">
                                        <div className="product-action">
                                            <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="/"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                            <a title="Wishlist" href="/"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                            <a title="Compare" href="/"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                        </div>
                                        <div className="product-action-2">
                                            <a title="Add to cart" href="/">Add to cart</a>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h3><a href="/">Black Sunglass For Men</a></h3>
                                        <div className="product-price">
                                        <span className="old">Rp. 60.00</span>
                                        <span>Rp. 50.00</span>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            {/*/ End Single Tab */}
                            {/* Start Single Tab */}
                            <div className="tab-pane fade" id="prices" role="tabpanel">
                            <div className="tab-single">
                                <div className="row">
                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                    <div className="single-product">
                                    <div className="product-img">
                                        <a href="/">
                                        <img className="default-img" src="assets/images/men.png" alt="#" />

                                        <img className="hover-img" src="assets/images/menblur.png" alt="#" />

                                        </a>
                                        <div className="button-head">
                                        <div className="product-action">
                                            <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="/"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                            <a title="Wishlist" href="/"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                            <a title="Compare" href="/"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                        </div>
                                        <div className="product-action-2">
                                            <a title="Add to cart" href="/">Add to cart</a>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h3><a href="/">Men Hot Collection</a></h3>
                                        <div className="product-price">
                                        <span>Rp. 100.000</span>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                    <div className="single-product">
                                    <div className="product-img">
                                        <a href="/">
                                        <img className="default-img" src="assets/images/men.png" alt="#" />

                                        <img className="hover-img" src="assets/images/menblur.png" alt="#" />

                                        </a>
                                        <div className="button-head">
                                        <div className="product-action">
                                            <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="/"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                            <a title="Wishlist" href="/"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                            <a title="Compare" href="/"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                        </div>
                                        <div className="product-action-2">
                                            <a title="Add to cart" href="/">Add to cart</a>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h3><a href="/">Awesome Pink Show</a></h3>
                                        <div className="product-price">
                                        <span>Rp. 100.000</span>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                    <div className="single-product">
                                    <div className="product-img">
                                        <a href="/">
                                        <img className="default-img" src="assets/images/men.png" alt="#" />

                                        <img className="hover-img" src="assets/images/menblur.png" alt="#" />

                                        </a>
                                        <div className="button-head">
                                        <div className="product-action">
                                            <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="/"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                            <a title="Wishlist" href="/"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                            <a title="Compare" href="/"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                        </div>
                                        <div className="product-action-2">
                                            <a title="Add to cart" href="/">Add to cart</a>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h3><a href="/">Awesome Bags Collection</a></h3>
                                        <div className="product-price">
                                        <span>Rp. 100.000</span>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                    <div className="single-product">
                                    <div className="product-img">
                                        <a href="/">
                                        <img className="default-img" src="assets/images/men.png" alt="#" />

                                        <img className="hover-img" src="assets/images/menblur.png" alt="#" />

                                        <span className="new">New</span>
                                        </a>
                                        <div className="button-head">
                                        <div className="product-action">
                                            <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="/"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                            <a title="Wishlist" href="/"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                            <a title="Compare" href="/"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                        </div>
                                        <div className="product-action-2">
                                            <a title="Add to cart" href="/">Add to cart</a>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h3><a href="/">Men Pant Collectons</a></h3>
                                        <div className="product-price">
                                        <span>Rp. 100.000</span>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                    <div className="single-product">
                                    <div className="product-img">
                                        <a href="/">
                                        <img className="default-img" src="assets/images/men.png" alt="#" />

                                        <img className="hover-img" src="assets/images/menblur.png" alt="#" />

                                        </a>
                                        <div className="button-head">
                                        <div className="product-action">
                                            <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="/"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                            <a title="Wishlist" href="/"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                            <a title="Compare" href="/"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                        </div>
                                        <div className="product-action-2">
                                            <a title="Add to cart" href="/">Add to cart</a>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h3><a href="/">Awesome Bags Collection</a></h3>
                                        <div className="product-price">
                                        <span>Rp. 100.000</span>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                    <div className="single-product">
                                    <div className="product-img">
                                        <a href="/">
                                        <img className="default-img" src="assets/images/men.png" alt="#" />

                                        <img className="hover-img" src="assets/images/menblur.png" alt="#" />

                                        <span className="price-dec">30% Off</span>
                                        </a>
                                        <div className="button-head">
                                        <div className="product-action">
                                            <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="/"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                            <a title="Wishlist" href="/"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                            <a title="Compare" href="/"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                        </div>
                                        <div className="product-action-2">
                                            <a title="Add to cart" href="/">Add to cart</a>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h3><a href="/">Awesome Cap For Men</a></h3>
                                        <div className="product-price">
                                        <span>Rp. 100.000</span>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                    <div className="single-product">
                                    <div className="product-img">
                                        <a href="/">
                                        <img className="default-img" src="assets/images/men.png" alt="#" />

                                        <img className="hover-img" src="assets/images/menblur.png" alt="#" />

                                        </a>
                                        <div className="button-head">
                                        <div className="product-action">
                                            <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="/"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                            <a title="Wishlist" href="/"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                            <a title="Compare" href="/"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                        </div>
                                        <div className="product-action-2">
                                            <a title="Add to cart" href="/">Add to cart</a>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h3><a href="/">Polo Dress For Men</a></h3>
                                        <div className="product-price">
                                        <span>Rp. 100.000</span>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                    <div className="single-product">
                                    <div className="product-img">
                                        <a href="/">
                                        <img className="default-img" src="assets/images/men.png" alt="#" />

                                        <img className="hover-img" src="assets/images/menblur.png" alt="#" />

                                        <span className="out-of-stock">Hot</span>
                                        </a>
                                        <div className="button-head">
                                        <div className="product-action">
                                            <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="/"><i className=" ti-eye" /><span>Quick Shop</span></a>
                                            <a title="Wishlist" href="/"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                            <a title="Compare" href="/"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                                        </div>
                                        <div className="product-action-2">
                                            <a title="Add to cart" href="/">Add to cart</a>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h3><a href="/">Black Sunglass For Men</a></h3>
                                        <div className="product-price">
                                        <span className="old">Rp. 60.00</span>
                                        <span>Rp. 50.00</span>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            {/*/ End Single Tab */}
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                {/* End Product Area */}
            </div>  
        )  
    }  
}  
  
export default Trending  
