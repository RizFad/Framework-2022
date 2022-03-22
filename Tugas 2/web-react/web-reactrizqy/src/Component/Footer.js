import React, { Component } from 'react'  
  
export class Footer extends Component {  
    render() {  
        return (
        <div>
        {/* Start Footer Area */}
        <footer className="footer">
        
        <div className="copyright">
            <div className="container">
            <div className="inner">
                <div className="row">
                <div className="col-lg-6 col-12">
                    <div className="left">
                    <p>Copyright © 2022 -  All Rights Reserved.</p>
                    </div>
                </div>
                <div className="col-lg-6 col-12">
                    <div className="right">
                    <img src="assets/images/payments.png" alt="#" />
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </footer>
        {/* /End Footer Area */}

        </div>
        )
    }
}


export default Footer