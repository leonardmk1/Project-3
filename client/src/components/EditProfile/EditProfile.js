import React, { Component } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";
import axios from "axios";

class ModalPage extends Component {
  state = {
    modal: false,
    selectedFile: null,
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  fileSelectedHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
  };

  fileUploadHandler = () => {
    axios.post();
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
              <label htmlFor="formGroupExampleInput">User Name</label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
              />
            </div>{" "}
            <input type="file" onChange={this.fileSelectedHandler} />
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn outline color="indigo" onClick={this.toggle}>
              Close
            </MDBBtn>
            <MDBBtn outline color="primary" onClick={this.fileUploadHandler}>
              Save changes
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default ModalPage;
