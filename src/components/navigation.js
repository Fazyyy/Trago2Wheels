import React from "react";
import Link from "gatsby-link";
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
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
        <Navbar className="navigation__navbar" light expand="md">
            <Container>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse isOpen={!this.state.collapsed} navbar>
                <Nav className="mr-auto" navbar>
                <NavItem>
                    <Link className="nav-link navigation__navlinks" to="/">
                    Home
                    </Link>
                </NavItem>
                <NavItem>
                    <Link
                    onClick={this.closeNavbar}
                    className="nav-link navigation__navlinks"
                    to="/motorbikes/"
                    >
                    Motorbikes
                    </Link>
                </NavItem>
                </Nav>
            </Collapse>
            </Container>
        </Navbar>
    );
  }
}