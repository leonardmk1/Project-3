import React, { Component } from "react";
import { MDBBtn, MDBContainer, MDBJumbotron, MDBCard, MDBCardBody, MDBCardHeader, MDBCardText } from "mdbreact";
import AuthContext from "../../contexts/AuthContext";
import EditProfile from "../../components/EditProfile/EditProfile";
import API from "../../lib/API";

class Profile extends Component{
  static contextType = AuthContext;
  
  state = {
    user: this.context,
    userReviews: []
  };

  componentDidMount() {
    const {user} =this.context;
    let currentComponent = this;
    this.setState({user:user}, () => {
      API.Reviews.getUsersReviews(this.state.user._id).then(function (res) {
        currentComponent.setState({userReviews:res.data});
      });
      console.log(user);
    })
  }

  render() {
    
  return (
    <MDBContainer>
      <MDBJumbotron className="mt-5 shadow-lg">
        <img
          src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
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
          <h2 className="text-center mt-5">User Name</h2>
        </p>
        <p>
          Some quick example text to build on the card title and make up the
          bulk of the card&apos;s content.
        </p>
        <EditProfile />
        <hr className="m-5"></hr>
        <p>
          {" "}
          <h2 className="text-center mt-5">Reviews</h2>
          {this.state.userReviews.map((review) => (
            <MDBCard className="mt-4">
            <MDBCardBody>
              <MDBCardHeader>{review.title}</MDBCardHeader>
              <MDBCardText>
          <p className="m-auto">{review.rating}</p>
                <p className="mt-2">
                  {review.review}
                </p>
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
          ))}
        </p>
      </MDBJumbotron>
    </MDBContainer>
  );
};
}
export default Profile;
