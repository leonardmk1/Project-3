import React, { Component } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBJumbotron,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBRow,
  MDBCardText,
  MDBCardTitle,
  MDBCol,
} from "mdbreact";
import AuthContext from "../../contexts/AuthContext";
import EditProfile from "../../components/EditProfile/EditProfile";
import API from "../../lib/API";
import "./Profile.css";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

class Profile extends Component {
  static contextType = AuthContext;

  state = {
    user: this.context,
    userReviews: [],
  };

  componentDidMount() {
    const { user } = this.context;
    let currentComponent = this;
    this.setState({ user: user }, () => {
      API.Reviews.getUsersReviews(this.state.user._id).then(function (res) {
        currentComponent.setState({ userReviews: res.data });
      });
      console.log(user);
    });
  }

  render() {
    return (
      <MDBContainer>
        <MDBJumbotron className="mt-5 shadow-lg">
          <img
            src={this.state.user.profilePic || "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}
            className="img-fluid shadow-lg"
            style={{
              width: "300px",
              height: "300px",
              borderRadius: "150px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
          <p>
            {" "}
          <h2 className="text-center mt-5">{this.state.user.username}</h2>
          </p>
          <p>
            Some quick example text to build on the card title and make up the
            bulk of the card&apos;s content.
          </p>
          <EditProfile id={this.state.user._id} />
          <hr className="m-5"></hr>
          <p>
            <h2 className="text-center mt-5">Reviews</h2>
            {this.state.userReviews.map((review) => (
              <MDBCard className="my-4 shadow-lg">
                <MDBCardHeader className="header text-white">
                  <MDBRow>
                    <MDBCol size="3" className="text-left">
                      <h5>{review.title}</h5>
                    </MDBCol>
                    <MDBCol size="6" className="text-right">
                      <Link
                        className="text-white"
                        to={`/Details/${review.movieId}`}
                      >
                        Movie Details
                      </Link>
                    </MDBCol>
                    <MDBCol size="3" className="text-right yellow-text">
                      {[...Array(review.rating)].map((e, i) => (
                        <FaStar
                          icon="star"
                          className="star"
                          size={20}
                          key={i}
                        />
                      ))}

                      {/* <span>{review.rating}</span> */}
                    </MDBCol>
                  </MDBRow>
                </MDBCardHeader>
                <MDBCardText>
                  <MDBRow>
                    <MDBCol>
                      <h5 className="text-left m-5">{review.review}</h5>
                    </MDBCol>
                  </MDBRow>
                </MDBCardText>
              </MDBCard>
            ))}
          </p>
        </MDBJumbotron>
      </MDBContainer>
    );
  }
}
export default Profile;
