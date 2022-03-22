import React from 'react';   

function ShopGrid() {  
        return (  
        <div>  
        {/* Product Style */}
        <section className="product-area shop-sidebar shop section">
            <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-4 col-12">
                <div className="shop-sidebar">
                    {/* Single Widget */}
                    <div className="single-widget category">
                    <h3 className="title">Categories</h3>
                    <ul className="categor-list">
                        <li><a href="/">T-shirts</a></li>
                        <li><a href="/">jacket</a></li>
                        <li><a href="/">jeans</a></li>
                        <li><a href="/">sweatshirts</a></li>
                        <li><a href="/">trousers</a></li>
                        <li><a href="/">kitwears</a></li>
                        <li><a href="/">accessories</a></li>
                    </ul>
                    </div>
                    {/*/ End Single Widget */}
                    {/* Shop By Price */}
                    <div className="single-widget range">
                    <h3 className="title">Shop by Price</h3>
                    <div className="price-filter">
                        <div className="price-filter-inner">
                        <div id="slider-range" />
                        <div className="price_slider_amount">
                            <div className="label-input">
                            <span>Range:</span><input type="text" id="amount" name="price" placeholder="Add Your Price" />
                            </div>
                        </div>
                        </div>
                    </div>
                    <ul className="check-box-list">
                        <li>
                        <label className="checkbox-inline" htmlFor={1}><input name="news" id={1} type="checkbox" />Rp. 20 - Rp. 50<span className="count">(3)</span></label>
                        </li>
                        <li>
                        <label className="checkbox-inline" htmlFor={2}><input name="news" id={2} type="checkbox" />Rp. 50 - Rp. 100<span className="count">(5)</span></label>
                        </li>
                        <li>
                        <label className="checkbox-inline" htmlFor={3}><input name="news" id={3} type="checkbox" />Rp. 100 - Rp. 250<span className="count">(8)</span></label>
                        </li>

                    </ul>
                    </div>
                    {/*/ End Shop By Price */}
                    {/* Single Widget */}
                    <div className="single-widget recent-post">
                    <h3 className="title">Recent post</h3>
                    {/* Single Post */}
                    <div className="single-post first">
                        <div className="image">
                        <img src="assets/images/shopgrid (1).png" alt="#" />
                        </div>
                        <div className="content">
                        <h5><a href="/">Girls Dress</a></h5>
                        <p className="price">Rp. 99.50</p>
                        <ul className="reviews">
                            <li className="yellow"><i className="ti-star" /></li>
                            <li className="yellow"><i className="ti-star" /></li>
                            <li className="yellow"><i className="ti-star" /></li>
                            <li><i className="ti-star" /></li>
                            <li><i className="ti-star" /></li>
                        </ul>
                        </div>
                    </div>
                    {/* End Single Post */}
                    {/* Single Post */}
                    <div className="single-post first">
                        <div className="image">
                        <img src="assets/images/shopgrid (1).png" alt="#" />
                        </div>
                        <div className="content">
                        <h5><a href="/">Women Clothings</a></h5>
                        <p className="price">Rp. 99.50</p>
                        <ul className="reviews">
                            <li className="yellow"><i className="ti-star" /></li>
                            <li className="yellow"><i className="ti-star" /></li>
                            <li className="yellow"><i className="ti-star" /></li>
                            <li className="yellow"><i className="ti-star" /></li>
                            <li><i className="ti-star" /></li>
                        </ul>
                        </div>
                    </div>
                    {/* End Single Post */}
                    {/* Single Post */}
                    <div className="single-post first">
                        <div className="image">
                        <img src="assets/images/shopgrid (1).png" alt="#" />
                        </div>
                        <div className="content">
                        <h5><a href="/">Man Tshirt</a></h5>
                        <p className="price">Rp. 99.50</p>
                        <ul className="reviews">
                            <li className="yellow"><i className="ti-star" /></li>
                            <li className="yellow"><i className="ti-star" /></li>
                            <li className="yellow"><i className="ti-star" /></li>
                            <li className="yellow"><i className="ti-star" /></li>
                            <li className="yellow"><i className="ti-star" /></li>
                        </ul>
                        </div>
                    </div>
                    {/* End Single Post */}
                    </div>
                    {/*/ End Single Widget */}
                    {/* Single Widget */}
                    <div className="single-widget category">
                    <h3 className="title">Manufacturers</h3>
                    <ul className="categor-list">
                        <li><a href="/">Forever</a></li>
                        <li><a href="/">giordano</a></li>
                        <li><a href="/">abercrombie</a></li>
                        <li><a href="/">ecko united</a></li>
                        <li><a href="/">zara</a></li>
                    </ul>
                    </div>
                    {/*/ End Single Widget */}
                </div>
                </div>
                <div className="col-lg-9 col-md-8 col-12">
                <div className="row">
                    <div className="col-12">
                    {/* Shop Top */}
                    <div className="shop-top">
                        <div className="shop-shorter">
                        <div className="single-shorter">
                            <label>Show :</label>
                            <select>
                            <option selected="selected">09</option>
                            <option>15</option>
                            <option>25</option>
                            <option>30</option>
                            </select>
                        </div>
                        <div className="single-shorter">
                            <label>Sort By :</label>
                            <select>
                            <option selected="selected">Name</option>
                            <option>Price</option>
                            <option>Size</option>
                            </select>
                        </div>
                        </div>
                        <ul className="view-mode">
                        <li className="active"><a href="shop-grid.html"><i className="fa fa-th-large" /></a></li>
                        
                        </ul>
                    </div>
                    {/*/ End Shop Top */}
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-12">
                    <div className="single-product">
                        <div className="product-img">
                        <a href="/">
                            <img className="default-img" src="assets/images/shopgrid (2).png" alt="#" />
                            <img className="hover-img" src="assets/images/shopgrid (2).png" alt="#" />
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
                        <h3><a href="/">Women Hot Collection</a></h3>
                        <div className="product-price">
                            <span>Rp. 29.00</span>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                    <div className="single-product">
                        <div className="product-img">
                        <a href="/">
                            <img className="default-img" src="assets/images/shopgrid (2).png" alt="#" />
                            <img className="hover-img" src="assets/images/shopgrid (2).png" alt="#" />
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
                            <span>Rp. 29.00</span>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                    <div className="single-product">
                        <div className="product-img">
                        <a href="/">
                            <img className="default-img" src="assets/images/shopgrid (2).png" alt="#" />
                            <img className="hover-img" src="assets/images/shopgrid (2).png" alt="#" />
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
                            <span>Rp. 29.00</span>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                    <div className="single-product">
                        <div className="product-img">
                        <a href="/">
                            <img className="default-img" src="assets/images/shopgrid (2).png" alt="#" />
                            <img className="hover-img" src="assets/images/shopgrid (2).png" alt="#" />
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
                        <h3><a href="/">Women Pant Collectons</a></h3>
                        <div className="product-price">
                            <span>Rp. 29.00</span>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                    <div className="single-product">
                        <div className="product-img">
                        <a href="/">
                            <img className="default-img" src="assets/images/shopgrid (2).png" alt="#" />
                            <img className="hover-img" src="assets/images/shopgrid (2).png" alt="#" />
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
                            <span>Rp. 29.00</span>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                    <div className="single-product">
                        <div className="product-img">
                        <a href="/">
                            <img className="default-img" src="assets/images/shopgrid (2).png" alt="#" />
                            <img className="hover-img" src="assets/images/shopgrid (2).png" alt="#" />
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
                        <h3><a href="/">Awesome Cap For Women</a></h3>
                        <div className="product-price">
                            <span>Rp. 29.00</span>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                    <div className="single-product">
                        <div className="product-img">
                        <a href="/">
                            <img className="default-img" src="assets/images/shopgrid (2).png" alt="#" />
                            <img className="hover-img" src="assets/images/shopgrid (2).png" alt="#" />
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
                        <h3><a href="/">Polo Dress For Women</a></h3>
                        <div className="product-price">
                            <span>Rp. 29.00</span>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                    <div className="single-product">
                        <div className="product-img">
                        <a href="/">
                            <img className="default-img" src="assets/images/shopgrid (2).png" alt="#" />
                            <img className="hover-img" src="assets/images/shopgrid (2).png" alt="#" />
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
                        <h3><a href="/">Black Sunglass For Women</a></h3>
                        <div className="product-price">
                            <span className="old">Rp. 60.00</span>
                            <span>Rp. 50.00</span>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                    <div className="single-product">
                        <div className="product-img">
                        <a href="/">
                            <img className="default-img" src="assets/images/shopgrid (2).png" alt="#" />
                            <img className="hover-img" src="assets/images/shopgrid (2).png" alt="#" />
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
                        <h3><a href="/">Women Pant Collectons</a></h3>
                        <div className="product-price">
                            <span>Rp. 29.00</span>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        {/*/ End Product Style 1  */}
        </div>

        )  
}  
export default ShopGrid  