import React, { Component } from "react";
import {
  MDBContainer,
  MDBTabPane,
  MDBTabContent,
  MDBNav,
  MDBNavItem,
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardHeader,
} from "mdbreact";
import { Link } from "react-router-dom";
import "./Reviews.css";

class TabsDefault extends Component {
  state = {
    activeItem: "1",
  };

  toggle = (tab) => (e) => {
    if (this.state.activeItem !== tab) {
      this.setState({
        activeItem: tab,
      });
    }
  };
  

  render() {
    return (
      <MDBContainer>
          <h1 className="text-center mt-5">Reviews</h1>

          <MDBNav className="nav-tabs">
            <MDBNavItem>
              <Link
                link
                to="#"
                active={this.state.activeItem === "1"}
                onClick={this.toggle("1")}
                role="tab"
                className="tab"
              >
                All Users
              </Link>
            </MDBNavItem>
            <MDBNavItem>
              <Link
                link
                to="#"
                active={this.state.activeItem === "2"}
                onClick={this.toggle("2")}
                role="tab"
                className="tab"
              >
                My Reviews
              </Link>
            </MDBNavItem>
          </MDBNav>
          <MDBTabContent activeItem={this.state.activeItem}>
            <MDBTabPane tabId="1" role="tabpanel">
              <MDBCard className="mt-4">
                <MDBCardBody>
                  <MDBCardHeader>USER REVIEWS "TITLE" ON "DATE"</MDBCardHeader>
                  <MDBCardText>
                    <p className="mt-2">
                      Quisquam aperiam, pariatur. Tempora, placeat ratione porro
                      voluptate odit minima. Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit. Nihil odit magnam minima,
                      soluta doloribus reiciendis molestiae placeat unde eos
                      molestias.
                    </p>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBTabPane>
            <MDBTabPane tabId="2" role="tabpanel">
            <MDBCard className="mt-4">
                <MDBCardBody>
                  <MDBCardHeader>USER REVIEWS "TITLE" ON "DATE"</MDBCardHeader>
                  <MDBCardText>
                    <p className="mt-2">
                      Quisquam aperiam, pariatur. Tempora, placeat ratione porro
                      voluptate odit minima. Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit. Nihil odit magnam minima,
                      soluta doloribus reiciendis molestiae placeat unde eos
                      molestias.
                    </p>
                    <p className="mt-2">
                      Quisquam aperiam, pariatur. Tempora, placeat ratione porro
                      voluptate odit minima. Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit. Nihil odit magnam minima,
                      soluta doloribus reiciendis molestiae placeat unde eos
                      molestias.
                    </p>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBTabPane>
          </MDBTabContent>
      </MDBContainer>
    );
  }
}
export default TabsDefault;
