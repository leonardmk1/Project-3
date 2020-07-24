import React, { Component } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBInput,
} from "mdbreact";
import Rating from "../Rating/Rating";
import API from "../../lib/API";
import AuthContext from "../../contexts/AuthContext";

class RatingModal extends Component {
  static contextType = AuthContext;
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      rating: null,
      review: " ",
    };

    

  }
  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  setRating = (rating) => {
    this.setState({rating:rating})
  }

  handleSubmit = (title, movieId, rating, review, username, profilePic, userId) => {
    API.Reviews.create(title, movieId, rating, review, username, profilePic, userId).then(function (
      res
    ) {
      console.log(res);
    })
    .catch((err) => console.log(err));

  };

  render() {
    const { user } = this.context;
console.log(user)
    return (
      
      <MDBContainer>
        <MDBBtn outline color="primary" onClick={this.toggle}>
          Add Your Review
        </MDBBtn>
        <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
          <MDBModalHeader toggle={this.toggle}>Add Your Review</MDBModalHeader>
          <MDBModalBody>
            <Rating rating={this.state.rating} setRating={this.setRating}/>
          </MDBModalBody>
          <div className="m-5">
            {" "}
            <MDBInput type="textarea" label="Write a Review" onChange={(e) => this.setState({ review: e.target.value })}/>
          </div>
          <MDBModalFooter>
            <MDBBtn outline color="primary" onClick={this.toggle}>
              Close
            </MDBBtn>
            <MDBBtn
              outline
              color="primary"
              onClick={() => {
                this.handleSubmit(this.props.title, this.props.id, this.state.rating, this.state.review, user.username, user.profilePic, user._id);
                window.location.reload();
              }}
            >
              Save changes
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default RatingModal;
