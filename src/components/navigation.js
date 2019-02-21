import React from "react"
import Logo from "../img/trago-logo.png"

const NavItem = props => {
    const pageURI = window.location.pathname+window.location.search
    const liClassName = (props.path === pageURI) ? "nav-item active" : "nav-item";
    const aClassName = props.disabled ? "nav-link disabled" : "nav-link"
    return (
      <li className={liClassName}>
        <a href={props.path} className={aClassName}>
          {props.name}
          {(props.path === pageURI) ? (<span className="sr-only">(current)</span>) : ''}
        </a>
      </li>
    );
  }

class Navigation extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="navbar">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img src={Logo} alt="Trago Logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                        
                            <NavItem path="/" name="Home" />
                            <NavItem path="/motorbikes" name="Motorbikes" />
                            <NavItem path="/scooters" name="Scooters" disabled="true" />
                            <NavItem path="/clothing" name="Clothing" disabled="true" />
                            <NavItem path="/helmets" name="Helmets" disabled="true" />
                            <NavItem path="/tools" name="Tools" disabled="true" />
                            <NavItem path="/training" name="Training" disabled="true" />
                            <NavItem path="/news" name="News" disabled="true" />
                            <NavItem path="/contact" name="Contact" disabled="true" />

                        </ul>
                        <div></div>
                </div>
            </div>
        </nav>
        )
    }
}

export default Navigation;