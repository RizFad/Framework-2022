import React, { Component } from 'react'

class Footer extends Component{
    render(){
        return(
        <section className="paralax-mf footer-paralax bg-image sect-mt4 route" style={{backgroundImage: 'url(assets/images/footer.jpg)'}}>
        <footer>
            <div className="container">
            <div className="row">
                <div className="col-sm-12">
                <div className="copyright-box">
                    <div className="credits">
                    Rizqy Ghaniyyu Fadhilah<br/>
                    POLITEKNIK NEGERI MALANG
                    </div>
                </div>
                </div>
            </div>
            </div>
        </footer>
        </section>
        )
    }
}

export default Footer