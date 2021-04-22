import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

//Import Section Title
import SectionTitle from "../common/section-title";
import ServiceBox from "./services-box";

class Process extends Component {
    constructor(props) {
        super(props);
        this.state = {
            services : [
                { icon : "grid", title : "Bootstrap UI based", desc : "To an English person, it will seem like English as skeptical." },
                { icon : "edit", title : "Easy to customize", desc : "If several languages coalesce, the grammar of the language." },
                { icon : "headphones", title : "Awesome Support", desc : "The languages only differ in their grammar their pronunciation" },
                { icon : "layers", title : "Creative Design", desc : "Everyone realizes why a new common would be desirable." },
                { icon : "code", title : "Quality Code", desc : "To achieve this, it would be necessary to have uniform." },
                { icon : "tablet", title : "Responsive layout", desc : "Their separate existence is a myth. For science, music, etc." },
            ]
        }
    }
    
    render() {
        return (
            <React.Fragment>
        <section className="section bg-light" id="services">
            <Container>
            <SectionTitle
                subtitle="Services"
                title="Services We Provide"
                desc="It will be as simple as occidental in fact, it will be Occidental."
            />

                <Row>
                    <ServiceBox services={this.state.services} />
                </Row>
                

                <Row className="mt-4">
                    <Col lg={12}>
                        <div className="text-center">
                            <Link to="#" className="btn btn-success">View more</Link>
                        </div>
                    </Col>
                </Row>
                
            </Container>
            
        </section>
            </React.Fragment>
        );
    }
}

export default Process;