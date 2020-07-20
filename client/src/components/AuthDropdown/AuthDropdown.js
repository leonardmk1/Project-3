import React, { Component } from "react";
// import Gravatar from 'react-gravatar';
import {
  MDBIcon,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBNavItem,
} from "mdbreact";
import AuthContext from "../../contexts/AuthContext";

class AuthDropdown extends Component {
  static contextType = AuthContext;

  state = {
    isOpen: false,
  };

  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  handleLogout = () => {
    this.context.onLogout();
    this.props.onClick();
  };

  render() {
    const { user } = this.context;
    const { isOpen } = this.state;

    // const dropdownMenuClass = `dropdown-menu dropdown-menu-right ${
    //   isOpen && "show"
    // }`;

    return (
      <MDBDropdown>
          <MDBNavItem>
            <MDBDropdown>
              <MDBDropdownToggle nav caret>
                <MDBIcon
                  icon="user"
                  className="rounded-circle mx-1"
                  email={user.email}
                />{" "}
                {user.email}
              </MDBDropdownToggle>
              <MDBDropdownMenu className="dropdown-default">
                <MDBDropdownItem onClick={this.handleLogout}>
                  Logout
                </MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavItem>
      </MDBDropdown>

    );
  }
}

export default AuthDropdown;
