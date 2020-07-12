import React, { Component } from "react";
// import Gravatar from 'react-gravatar';
import {
  MDBIcon,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
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

    const dropdownMenuClass = `dropdown-menu dropdown-menu-right ${
      isOpen && "show"
    }`;

    return (
      <MDBDropdown>
        <MDBDropdownToggle caret color="blue">
          <MDBIcon
            icon="user-circle"
            className="rounded-circle mx-2"
            email={user.email}
          />{" "}
          {user.email}
        </MDBDropdownToggle>
        <MDBDropdownMenu>
          <MDBDropdownItem>Profile</MDBDropdownItem>
          <MDBDropdownItem className={dropdownMenuClass} onClick={this.handleLogout}>Logout</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
      // <li className="nav-item dropdown">
      //   <button className="btn btn-link dropdown-toggle" onClick={this.toggleOpen} id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      //     <MDBIcon icon="user-circle" className="rounded-circle " email={user.email}  /> {user.email}
      //   </button>
      //   <div className={dropdownMenuClass} aria-labelledby="navbarDropdown">
      //     <div className="dropdown-item" >Profile</div>
      //   </div>
      //   <div className={dropdownMenuClass} aria-labelledby="navbarDropdown">
      //     <div className="dropdown-item" onClick={this.handleLogout}>Logout</div>
      //   </div>
      // </li>
    );
  }
}

export default AuthDropdown;
