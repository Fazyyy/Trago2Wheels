import React from "react"
import { Link } from "gatsby"
import Logo from "../img/trago-logo.png"
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
  } from "reactstrap";

  export default class ReactNavbar extends React.Component {
    constructor(props) {
      super(props);
  
      this.toggleNavbar = this.toggleNavbar.bind(this);
      this.state = {
        collapsed: true
      };
    }
  
    toggleNavbar() {
      this.setState({
        collapsed: !this.state.collapsed
      });
    }
    render() {
      return <div>
          <Navbar color="dark" light>
            <NavbarBrand to="/" className="mr-auto">
              <img src={Logo} alt="Home" />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse isOpen={!this.state.collapsed} navbar>
              <Nav navbar>
                <NavItem>
                  <Link to="/">Home</Link>
                </NavItem>
                <NavItem>
                  <Link to="/motorbikes/">Motorbikes</Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>;
    }
  }