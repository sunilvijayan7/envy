import React, { Component } from 'react';
import {
    Navbar,
    Nav,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink,
    Container,
    Collapse,
    Button
} from "reactstrap";

import ScrollspyNav from "./scrollSpy";

//Import Images
import logolight from "../../assets/images/logo-dark.png";
import logodark from "../../assets/images/logo-dark.png";

class NavbarPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpenMenu: false
        };
    }

    toggle = () => {
        this.setState({ isOpenMenu: !this.state.isOpenMenu });
    }

    render() {
        //Store all Navigationbar Id into TargetID variable(Used for Scrollspy)
        let targetId = this.props.navItems.map((item) => {
            return (
                item.idnm
            )
        });
        return (
            <React.Fragment>
                <Navbar expand="lg" fixed="top" className={"navbar-custom sticky sticky-dark " + this.props.navClass}>
                    <Container>
                        <NavbarBrand className="logo text-uppercase" href="/">
                            {
                                this.props.imglight === true ?
                                    <img src={logolight} alt="" className="logo-light" height="20" />
                                    : <img src={logodark} alt="" className="logo-dark" height="20" />
                            }
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggle} ><i className="mdi mdi-menu"></i></NavbarToggler>

                        <Collapse id="navbarCollapse" isOpen={this.state.isOpenMenu} navbar>
                            <ScrollspyNav
                                scrollTargetIds={targetId}
                                scrollDuration="200"
                                headerBackground="true"
                                activeNavClass="active"
                                className="navbar-collapse"
                            >
                                <Nav navbar className="ml-auto navbar-center" id="mySidenav">
                                    {this.props.navItems.map((item, key) => (
                                        <NavItem key={key} className={item.navheading === "Home" ? "active" : ""}>
                                            <NavLink href={"#" + item.idnm} > {item.navheading}</NavLink>
                                        </NavItem>
                                    ))}
                                </Nav>
                                <Button color="success" className="btn-rounded navbar-btn">Try for Free</Button>
                            </ScrollspyNav>
                        </Collapse>
                    </Container>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default NavbarPage;