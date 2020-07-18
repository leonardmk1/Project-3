import React from "react";
import {
  MDBCard,
  MDBCardTitle,
  // MDBBtn,
  // MDBCardGroup,
  // MDBCardImage,
  MDBCardText,
  MDBCardBody,
  // MDBListGroup,
  MDBListGroupItem,
  // MDBContainer,
  MDBCol,
  MDBBadge,
  MDBRow,
  MDBIcon,
} from "mdbreact";

const CardExample = () => {
  return (
    <MDBRow>
      <MDBCol>
        <MDBCard  className="shadow-md" style={{ width: "21rem", marginTop: "25px" }}>
          <MDBCardBody>
            <MDBCardTitle className="text-center">
              Top Rated Movies
            </MDBCardTitle>
            <MDBListGroupItem href="#" hover>
              Dapibus ac facilisis in
              <MDBBadge className="ml-5" color="primary" pill>
                10
              </MDBBadge>
            </MDBListGroupItem>
            <MDBListGroupItem href="#" hover>
              Morbi leo risus
            </MDBListGroupItem>
            <MDBListGroupItem href="#" hover>
              Porta ac consectetur ac
            </MDBListGroupItem>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol>
        <MDBCard className="shadow-md" style={{ width: "21rem", marginTop: "25px" }}>
          <MDBCardBody>
            <MDBCardTitle className="text-center">
              Top Rated TV Shows
            </MDBCardTitle>
            <MDBListGroupItem className="text-left" href="#" hover>
              Dapibus ac facilisis in
              <MDBBadge className="ml-5 badge">
                <MDBIcon icon="star"></MDBIcon>
              </MDBBadge>
            </MDBListGroupItem>
            <MDBListGroupItem className="text-left" href="#" hover>
            Morbi leo risus
              <MDBBadge className="ml-5 badge">
                <MDBIcon icon="star"></MDBIcon>
              </MDBBadge>
            </MDBListGroupItem>
            <MDBListGroupItem className="text-left" href="#" hover>
              Dapibus ac facilisis in
              <MDBBadge className="ml-5 badge">
                <MDBIcon icon="star"></MDBIcon>
              </MDBBadge>
            </MDBListGroupItem>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol>
        <MDBCard className="shadow-md" style={{ width: "21rem", marginTop: "25px" }}>
          <MDBCardBody>
            <MDBCardTitle className="text-center">Trending</MDBCardTitle>
            <MDBListGroupItem href="#" hover>
              Dapibus ac facilisis in
              <MDBBadge className="ml-5" color="primary" pill>
                10
              </MDBBadge>
            </MDBListGroupItem>
            <MDBListGroupItem href="#" hover>
              Morbi leo risus
            </MDBListGroupItem>
            <MDBListGroupItem href="#" hover>
              Porta ac consectetur ac
            </MDBListGroupItem>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
};

export default CardExample;
