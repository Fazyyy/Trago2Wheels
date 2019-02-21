import React from "react";
import Link from "gatsby-link";
import Logo from "../img/trago-logo.png"
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.closeNavbar = this.closeNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  closeNavbar() {
    if (this.state.collapsed === true) {
      this.toggleNavbar();
    }
  }

  render() {
    return (
        <Navbar className="navigation__navbar navbar-fixed-top" light expand="md">
            <Container>
            <NavbarBrand href="/"><img src={Logo} alt="Trago2Wheels" /></NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse isOpen={!this.state.collapsed} navbar>
                <Nav className="ml-auto" navbar>
                <NavItem>
                    <Link className="nav-link navigation__navlinks" to="/">Home</Link>
                </NavItem>
                <NavItem>
                    <Link onClick={this.closeNavbar} className="nav-link navigation__navlinks" to="/motorbikes/">Motorbikes</Link>
                </NavItem>
                <NavItem>
                    <Link onClick={this.closeNavbar} className="nav-link navigation__navlinks disabled" to="/motorbikes/">Scooters</Link>
                </NavItem>
                <NavItem>
                    <Link onClick={this.closeNavbar} className="nav-link navigation__navlinks disabled" to="/motorbikes/">Clothing</Link>
                </NavItem>
                <NavItem>
                    <Link onClick={this.closeNavbar} className="nav-link navigation__navlinks disabled" to="/motorbikes/">Helmets</Link>
                </NavItem>
                <NavItem>
                    <Link onClick={this.closeNavbar} className="nav-link navigation__navlinks disabled" to="/motorbikes/">Tools</Link>
                </NavItem>
                <NavItem>
                    <Link onClick={this.closeNavbar} className="nav-link navigation__navlinks disabled" to="/motorbikes/">Training</Link>
                </NavItem>
                <NavItem>
                    <Link onClick={this.closeNavbar} className="nav-link navigation__navlinks disabled" to="/motorbikes/">News</Link>
                </NavItem>
                <NavItem>
                    <Link onClick={this.closeNavbar} className="nav-link navigation__navlinks disabled" to="/motorbikes/">Contact</Link>
                </NavItem>
                </Nav>
            </Collapse>
            </Container>
        </Navbar>
    );
  }
}