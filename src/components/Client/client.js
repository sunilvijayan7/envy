import React, { Component } from 'react';
import {
    Container,
    Row,
    Col
} from "reactstrap";

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

//Import Section Title
import SectionTitle from "../common/section-title";
import Counter from "../../components/Counter/counter";
import ClientBox from "./client-box";

//Import Images
import clinet1 from "../../assets/images/clients/1.png";
import clinet3 from "../../assets/images/clients/3.png";
import clinet4 from "../../assets/images/clients/4.png";
import clinet6 from "../../assets/images/clients/6.png";

class Clients extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clients: [
                { name: "Henry McElyea", post: "Envy User", desc: "Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their most common words." },
                { name: "Timothy Fairley", post: "Envy User", desc: "To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages of the resulting language" },
                { name: "James Brown", post: "Envy User", desc: "Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this it would be necessary." },
                { name: "Jason Davis", post: "Envy User", desc: "Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their most common words." },
                { name: "Rodney Tyler", post: "Envy User", desc: "For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words." },
            ],
            clients2: [
                { image: clinet1 },
                { image: clinet3 },
                { image: clinet4 },
                { image: clinet6 },
            ],
            responsive: {
                576: {
                    items: 2
                },
            }
        }
    }

    render() {
        return (
            <React.Fragment>
                <section className="section bg-light" id="clients">
                    <Container>
                        <SectionTitle
                            subtitle="Testimonial"
                            title="What our Client Say"
                            desc="It will be as simple as occidental in fact, it will be Occidental."
                        />

                        <Row>
                            <Col lg={12}>
                                <h5 className="mb-4"><i className="mdi mdi-format-quote-open text-primary h1 mr-1"></i> 3,500 + Satisfied Client</h5>

                                <OwlCarousel
                                    className="owl-theme testi-carousel"
                                    id="testi-carousel"
                                    items={1}
                                    loop={true}
                                    margin={10}
                                    nav={true}
                                    responsive={this.state.responsive}
                                >
                                    <ClientBox clients={this.state.clients} />
                                </OwlCarousel>
                            </Col>
                        </Row>


                        <Row className="mt-5">
                            {
                                this.state.clients2.map((client, key) =>
                                    <Col xl={3} sm={6} key={key} >
                                        <div className="client-images">
                                            <img src={client.image} alt="client-img" className="mx-auto img-fluid d-block" />
                                        </div>
                                    </Col>
                                )
                            }
                        </Row>

                    </Container>

                </section>

                <section className="section bg-primary">
                    <Container>
                        <Row className="justify-content-center mb-5">
                            <Col lg={7}>
                                <div className="text-center text-white-50">
                                    <h4 className="text-white">Best Solutions for your Business</h4>
                                    <p>To achieve this, it would be necessary to have uniform grammar, pronunciation and more common that of the individual languages.</p>
                                </div>
                            </Col>
                        </Row>

                        <Counter />
                    </Container>

                </section>
            </React.Fragment>
        );
    }
}

export default Clients;