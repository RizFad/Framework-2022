import React from 'react'
import ServiceArea from '../Section/ServiceArea' 
import NewsLetter from '../Section/NewsLetter' 

function Home() {
    return (  
        <div>  
        {/* Slider Area */}
            <div className="hero-slider">
                {/* Single Slider */}
                <div className="single-slider">
                    <div className="container">
                    <div className="row no-gutters">
                        <div className="col-lg-9 offset-lg-3 col-12">
                        <div className="text-inner">
                            <div className="row">
                            <div className="col-lg-7 col-12">
                                <div className="hero-text">
                                <h1><span>UP TO 50% OFF 
                                    </span>Shirt For Man</h1>
                                <p>Lets get your stylish fashion<br /> 
                                u just can get in VeShop <br /> 
                                many interesting discount.</p>
                                <div className="button">
                                    <a href="/" className="btn">Shop Now!</a>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/*/ End Single Slider */}
            </div>
            {/*/ End Slider Area */}
        <ServiceArea/>
        <NewsLetter/>
        </div>  
    )  
} 


export default Home;
