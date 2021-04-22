import React, { Component } from 'react';
import { Col } from "reactstrap";
import FeatherIcon from 'feather-icons-react';

class ServiceBox extends Component {
    render() {
        return (
            <React.Fragment>
                {
                    this.props.services.map((service, key) =>
                    <Col xl={4} sm={6} key={key} >
                        <div className="text-center p-4 mt-3">
                            <div className="avatar-md mx-auto mb-4">
                                <span className="avatar-title rounded-circle bg-soft-primary">
                                    <i>
                                    <FeatherIcon icon={service.icon} className="icon-dual-primary" />
                                    </i>
                                </span>
                            </div>
                            <h5 className="font-18">{service.title}</h5>
                            <p className="mb-0">{service.desc}</p>
                        </div>
                    </Col>
                    )
                }        
            </React.Fragment>
        );
    }
}

export default ServiceBox;