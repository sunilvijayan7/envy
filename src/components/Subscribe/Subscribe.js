import React, { Component } from 'react';
import { Container, Row, Col, Form, Input, Button } from "reactstrap";

class Subscribe extends Component {
    render() {
        return (
            <React.Fragment>
        <section className="section">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={8}>
                        <div className="text-center mb-5">
                            <h5 className="text-primary text-uppercase small-title">Subscribe</h5>
                            <h4 className="mb-3">Subscribe to our Newsletter</h4>
                            <p>It will be as simple as occidental in fact, it will be Occidental.</p>
                        </div>
                    </Col>

                    <Col xl={8} lg={10}>
                        <div className="text-center">
                            <div className="subscribe">
                                <Form>
                                    <Row>
                                        <Col md={9}>
                                            <div>
                                                <Input type="text" className="form-control" placeholder="Enter your E-mail address"/>
                                            </div>
                                        </Col>
                                        <Col md={3}>
                                            <div className="mt-3 mt-md-0">
                                                <Button type="submit" color="primary" block>Subscribe Us</Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                        </div>
                    </Col>
                </Row>
                
            </Container>
            
        </section>
            </React.Fragment>
        );
    }
}

export default Subscribe;