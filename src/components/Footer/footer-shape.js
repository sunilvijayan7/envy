import React, { Component } from 'react';
import footerWrap from "../../assets/images/footer-top-shape.png";

class FooterShape extends Component {
    
    render() {
        return (
        <React.Fragment>
            <div class="shape-img subscribe-wrap">
                <img src={footerWrap} alt="footer shape" class="img-fluid"/>
            </div>
        </React.Fragment>
        );
    }
}

export default FooterShape;