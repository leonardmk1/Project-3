import React, { Component } from "react";
import Card from "../../components/Card/Card";
import SearchContent from "../SearchContent/SearchContent";
import { MDBJumbotron, MDBContainer } from "mdbreact";

class HomePage extends Component {
  render() {
    return (
      <div className="Home">
        <Card />
        <MDBJumbotron fluid className="my-3 text-center shadow-box-example hoverable">
          <MDBContainer>
            <h3 className="display-5 m-4">
              <strong>Movie Stream</strong> allows for you to search{" "}
              <strong>Movies, TV shows, and more!</strong>
            </h3>
            <SearchContent />
          </MDBContainer>
        </MDBJumbotron>
      </div>
    );
  }
}

export default HomePage;
