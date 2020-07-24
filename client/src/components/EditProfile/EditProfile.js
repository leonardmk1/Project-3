import React, { Component } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";
import API from "../../lib/API";
import AuthContext from "../../contexts/AuthContext";
import { Redirect } from "react-router-dom";

class ModalPage extends Component {
  static contextType = AuthContext;
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      username: "",
      profilePic: "",
      redirect: false
    };
    this.handleUsernameChange = this.handleUsernameChange.bind(this)
    this.handlePhotoChange = this.handlePhotoChange.bind(this)
    this.saveChanges = this.saveChanges.bind(this)

  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  //   fileSelectedHandler = (event) => {
  //     this.setState({ selectedFile: event.target.files[0] });
  //   };

  //   fileUploadHandler = () => {
  //     axios.post();
  //   };
  handleUsernameChange = (e) => {
    this.setState({ username: e.target.value});
  };
  handlePhotoChange = (e) => {
    this.setState({ profilePic: e.target.value });
  };

  saveChanges = () => {
    API.Users.update(
      this.state.username,
      this.state.profilePic,
      this.props.id
    ).then((res) => {
      console.log(res);
      this.setState({redirect: true})

    });
  };

  render() {
    return (
      <MDBContainer>
        <MDBBtn onClick={this.toggle} outline color="primary">
          Edit Profile
        </MDBBtn>
        <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
          <MDBModalHeader toggle={this.toggle}>Edit Profile</MDBModalHeader>
          <MDBModalBody>
            <div className="form-group text-left">
              <label htmlFor="formGroupExampleInput">Username</label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                onChange={this.handleUsernameChange}
                value={this.state.username}
              />
              <br></br>
              <label htmlFor="formGroupExampleInput">Link a URL Photo</label>
              <input
                type="text"
                className="form-control"
                id="photoURL"
                onChange={this.handlePhotoChange}
                value={this.state.profilePic}
              />
            </div>{" "}
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn outline color="indigo" onClick={this.toggle}>
              Close
            </MDBBtn>
            <MDBBtn
              outline
              color="primary"
              onClick={() => {
                this.saveChanges();
              }}
            >
              Save changes
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
        {this.state.redirect ? <Redirect to="/login"></Redirect>: ""}
      </MDBContainer>
    );
  }
}

export default ModalPage;
