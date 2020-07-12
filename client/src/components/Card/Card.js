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
            <MDBListGroupItem href="#" hover>
              Dapibus ac facilisis in
            </MDBListGroupItem>
            <MDBListGroupItem href="#" hover>
              Dapibus ac facilisis in
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
            <MDBListGroupItem href="#" hover>
              Dapibus ac facilisis in
            </MDBListGroupItem>
            <MDBListGroupItem href="#" hover>
              Dapibus ac facilisis in
            </MDBListGroupItem>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol>
        <MDBCard className="shadow-md" style={{ width: "21rem", marginTop: "25px" }}>
          <MDBCardBody>
            <MDBCardTitle className="text-center">Reviews</MDBCardTitle>
            <MDBCardText>
              Get movie reviews. Can filter to only return Critics' Picks.
              Supports ordering results by-title, by-publication-date, or
              by-opening-date. Use offset to paginate thru results, 20 at a
              time.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
};

export default CardExample;
