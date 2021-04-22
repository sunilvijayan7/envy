import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, CardHeader } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";
import FeatureBox from "./feature-box";

//Import Images
import feature1 from "../../assets/images/features/img-1.png";
import feature2 from "../../assets/images/features/img-2.png";


class Features extends Component {
    constructor(props) {
        super(props);
        this.state = {
            smallFeatures1 : [
                { title : "Donec quam felis" },
                { title : "Ultricies nec" },
            ],
            smallFeatures2 : [
                { title : "Donec quam felis" },
                { title : "Ultricies nec" },
            ]
        }
    }

    render() {
        return (
            <React.Fragment>
        <section className="section" id="features">
            <Container>
            <SectionTitle
                subtitle="Features"
                title="Key features of the product"
                desc="It will be as simple as occidental in fact, it will be Occidental."
            />               

                <Row>
                    <Col lg={5}>
                        <div>
                            <FeatureBox icon="bar-chart-2" title="Improve your Marketing business" smallFeatures={this.state.smallFeatures1} desc="If several languages coalesce, the grammar of the resulting language is more simple and regular." link="#" />
                        </div>
                    </Col>

                    <Col lg={5} sm={8} className="ml-lg-auto">
                        <Card className="border border-light shadow-none mt-5 mt-lg-0">
                            <CardHeader className="border-0 bg-transparent">
                                <div>
                                    <i className="mdi mdi-circle text-danger mr-1"></i>
                                    <i className="mdi mdi-circle text-warning mr-1 ml-1"></i>
                                    <i className="mdi mdi-circle text-success mr-1 ml-1"></i>
                                </div>
                            </CardHeader>
                            <CardBody className="bg-light">
                                <div className="box-shadow">
                                    <img src={feature1} alt="" className="img-fluid mx-auto d-block"/>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                

                <Row className="mt-5 pt-5">
                    <Col lg={5} sm={8}>
                        <Card className="border border-light shadow-none">
                            <CardHeader className=" border-0 bg-transparent">
                                <div>
                                    <i className="mdi mdi-circle text-danger mr-1"></i>
                                    <i className="mdi mdi-circle text-warning mr-1 ml-1"></i>
                                    <i className="mdi mdi-circle text-success mr-1 ml-1"></i>
                                </div>
                            </CardHeader>
                            <CardBody className="bg-light">
                                <div className="box-shadow">
                                    <img src={feature2} alt="" className="img-fluid mx-auto d-block"/>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={5} className="ml-lg-auto">
                        <div className="mt-4 mt-lg-0">
                        <FeatureBox icon="pie-chart" title="Increase your Marketing Performance" smallFeatures={this.state.smallFeatures2} desc="If several languages coalesce, the grammar of the resulting language is more simple and regular." link="#" />
                        </div>
                    </Col>

                </Row>
                
            </Container>
            
        </section>
            </React.Fragment>
        );
    }
}

export default Features;