import React, { Component } from 'react';
import { Card, CardBody, Media } from "reactstrap";

class ClientBox extends Component {
    render() {
        return (
            <React.Fragment>
                {
                    this.props.clients.map((client, key) =>
                        <div key={key} className="item">
                            <Card>
                                <CardBody className="p-4">
                                    <p className="mb-4">" {client.desc} "</p>
                                    <Media className="pt-3">
                                        <div className="avatar-md mr-3">
                                            <span className="avatar-title rounded-circle bg-soft-primary text-primary font-16">
                                                {client.name.charAt(0)}
                                            </span>
                                        </div>
                                        <Media body className="align-self-center">
                                            <h5 className="font-16">{client.name}</h5>
                                            <span>- {client.post}</span>
                                        </Media>
                                        <div className="text-muted ml-2 align-self-end d-none d-lg-block">
                                            <i className="mdi mdi-star text-warning"></i>
                                            <i className="mdi mdi-star text-warning ml-1"></i>
                                            <i className="mdi mdi-star text-warning ml-1"></i>
                                            <i className="mdi mdi-star text-warning ml-1"></i>
                                            <i className="mdi mdi-star ml-1"></i>
                                        </div>
                                    </Media>
                                </CardBody>
                            </Card>
                        </div>
                    )
                }
            </React.Fragment>
        );
    }
}

export default ClientBox;