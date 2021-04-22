import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";
import FeatherIcon from 'feather-icons-react';

class FeatureBox extends Component {
    render() {
        return (
            <React.Fragment>
                            <div className="avatar-md mb-4">
                                <span className="avatar-title rounded-circle bg-soft-primary">
                                    <i>
                                    <FeatherIcon icon={this.props.icon} className="icon-dual-primary" />
                                    </i>
                                </span>
                            </div>
                            <h5>{this.props.title}</h5>
                            <p className="mb-4">{this.props.desc}</p>

                            <Row>
                                {
                                    this.props.smallFeatures.map((sFeature, key) =>
                                        <Col sm={6} key={key} >
                                            <p>
                                                <i>
                                                <FeatherIcon icon="check" className="icon-dual-success mr-2" />
                                                </i>{" "}
                                                {sFeature.title}
                                            </p>
                                        </Col>
                                    )
                                }
                            </Row>

                            <div className="mt-4">
                                <Link to={this.props.link} className="btn btn-primary">Learn more {" "}
                                <i>
                                    <FeatherIcon icon="arrow-right" className="icons-sm ml-1" />
                                </i>
                                </Link>
                            </div>
            </React.Fragment>
        );
    }
}

export default FeatureBox;