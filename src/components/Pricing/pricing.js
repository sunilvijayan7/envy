import React, { Component } from 'react';
import { Container, Row, Col, Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import classnames from 'classnames';

//Import Section Title
import SectionTitle from "../common/section-title";

//Import Pricing
import PricingBox from './pricing-box';

class Pricing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pricings1 : [
               { title : "Economy", price : 19, duration : "Mo",
                    features : [
                        { title : "Bandwidth", value : "1GB" },
                        { title : "Onlinespace ", value : "50MB" },
                        { title : "Support", value : "No" },
                    ]
                },
                { title : "Premium", price : 29, duration : "Mo",
                    features : [
                        { title : "Bandwidth", value : "2GB" },
                        { title : "Onlinespace ", value : "1GB" },
                        { title : "Support", value : "No" },
                    ]
                },
                { title : "Developer", price : 39, duration : "Mo",
                    features : [
                        { title : "Bandwidth", value : "3GB" },
                        { title : "Onlinespace ", value : "2GB" },
                        { title : "Support", value : "Yes" },
                    ]
                },
            ],
            pricings2 : [
                { title : "Economy", price : 19, duration : "Year",
                     features : [
                         { title : "Bandwidth", value : "1GB" },
                         { title : "Onlinespace ", value : "50MB" },
                         { title : "Support", value : "No" },
                     ]
                 },
                 { title : "Premium", price : 29, duration : "Year",
                     features : [
                         { title : "Bandwidth", value : "2GB" },
                         { title : "Onlinespace ", value : "1GB" },
                         { title : "Support", value : "No" },
                     ]
                 },
                 { title : "Developer", price : 39, duration : "Year",
                     features : [
                         { title : "Bandwidth", value : "3GB" },
                         { title : "Onlinespace ", value : "2GB" },
                         { title : "Support", value : "Yes" },
                     ]
                 },
             ],
            activeTab: '1',
        }
        this.toggleTab = this.toggleTab.bind(this);
    }

    toggleTab(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
    
    render() {
        return (
            <React.Fragment>
        <section className="section bg-light" id="pricing">
            <Container>
            <SectionTitle
                subtitle="Pricing"
                title="Choose your Plan"
                desc="It will be as simple as occidental in fact, it will be Occidental."
            />
                

                <Row>
                    <Col lg={12}>
                        <div className="text-center mb-4">
                            <Nav pills className="pricing-nav-tabs mb-4">
                                <NavItem>
                                    <NavLink className={classnames({ active: this.state.activeTab === '1' })} onClick={() => { this.toggleTab('1'); }} >Monthly</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className={classnames({ active: this.state.activeTab === '2' })} onClick={() => { this.toggleTab('2'); }}>Yearly</NavLink>
                                </NavItem>
                            </Nav>
                        </div>
                    </Col>
                </Row>

                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <Row>
                            <PricingBox pricings={this.state.pricings1} />
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                            <PricingBox pricings={this.state.pricings2} />
                        </Row>
                    </TabPane>
                </TabContent>
                
            </Container>
            
        </section>
            </React.Fragment>
        );
    }
}

export default Pricing;