import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
} from "mdbreact";

import AuthContext from "../../contexts/AuthContext";
import AuthDropdown from "../../components/AuthDropdown/AuthDropdown";

class Navigation extends Component {
  static contextType = AuthContext;
  constructor(props){
    super(props)
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this)
  }
    onClick = () => {
    this.setState({
      collapse: !this.state.collapse,
    });
  };

  render() {
    const { user } = this.context;
    // const { collapsed } = this.state;
    // const targetClass = `collapse navbar-collapse ${!collapsed && "show"}`;
    // const togglerClass = `navbar-toggler ${collapsed && "collapsed"}`;

    return (
      <MDBNavbar className="blue-gradient color-block" dark expand="md">
        <MDBNavbarBrand>
          <Link className="navbar-brand" to="/">
            <h1>Movie Stream</h1>
          </Link>
        </MDBNavbarBrand>

        <MDBNavbarToggler onClick={this.onClick} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.collapse} navbar>
          <MDBNavbarNav left>
            <div id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/TopRatedMovies"
                    onClick={this.toggleCollapse}
                  >
                    Top Rated Movies
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/TopRatedTVShows"
                    onClick={this.toggleCollapse}
                  >
                    Top Rated TV Shows
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/Profile"
                    onClick={this.toggleCollapse}
                  >
                    Profile
                  </Link>
                </li>
         
              </ul>
            </div>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <ul className="navbar-nav">
                {user ? (
                  <AuthDropdown onClick={this.onClick} />
                ) : (
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/login"
                      onClick={this.onClick}
                    >
                      Login/Register
                    </Link>
                  </li>
                )}
              </ul>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default Navigation;
