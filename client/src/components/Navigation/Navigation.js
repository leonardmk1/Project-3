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

  state = {
    collapsed: true,
  };

  toggleCollapse = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const { user } = this.context;
    const { collapsed } = this.state;
    const targetClass = `collapse navbar-collapse ${!collapsed && "show"}`;
    const togglerClass = `navbar-toggler ${collapsed && "collapsed"}`;

    return (
      <MDBNavbar className="blue-gradient color-block" dark expand="md">
        <MDBNavbarBrand>
          <Link className="navbar-brand" to="/">
            <h1>Movie Stream</h1>
          </Link>
        </MDBNavbarBrand>

        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <div className={targetClass} id="navbarSupportedContent">
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
                    to="/Reviews"
                    onClick={this.toggleCollapse}
                  >
                    Reviews
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
                  <AuthDropdown onClick={this.toggleCollapse} />
                ) : (
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/login"
                      onClick={this.toggleCollapse}
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
