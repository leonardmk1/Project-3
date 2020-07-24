import React from "react";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardBody,
  MDBListGroupItem,
  MDBCol,
  MDBBadge,
  MDBRow,
  MDBIcon,
  MDBContainer,
} from "mdbreact";

const CardExample = () => {
  return (
    <MDBContainer size="md" className="my-4">
    <MDBRow>
      <MDBCol>
        <MDBCard className="shadow-box-example hoverable"  style={{ width: "20rem", }}>
          <MDBCardBody>
            <MDBCardTitle className="text-center">
              Top Rated Movies
            </MDBCardTitle>
            <MDBListGroupItem href="#" hover className="text-left">
              Dapibus ac facilisis in
              <MDBBadge className="ml-5" color="primary" pill>
                10
              </MDBBadge>
            </MDBListGroupItem>
            <MDBListGroupItem className="text-left" href="#" hover>
              Morbi leo risus
            </MDBListGroupItem>
            <MDBListGroupItem className="text-left" href="#" hover>
              Porta ac consectetur ac
            </MDBListGroupItem>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol>
        <MDBCard  className="shadow-box-example hoverable" style={{ width: "20rem", }}>
          <MDBCardBody>
            <MDBCardTitle className="text-center">
              Top Rated Movies
            </MDBCardTitle>
            <MDBListGroupItem href="#" hover className="text-left">
              Dapibus ac facilisis in
              <MDBBadge className="ml-5" color="primary" pill>
                10
              </MDBBadge>
            </MDBListGroupItem>
            <MDBListGroupItem className="text-left" href="#" hover>
              Morbi leo risus
            </MDBListGroupItem>
            <MDBListGroupItem className="text-left" href="#" hover>
              Porta ac consectetur ac
            </MDBListGroupItem>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard  className="shadow-box-example hoverable" style={{ width: "20rem", }}>
          <MDBCardBody>
            <MDBCardTitle className="text-center">
              Top Rated Movies
            </MDBCardTitle>
            <MDBListGroupItem href="#" hover className="text-left">
              Dapibus ac facilisis in
              <MDBBadge className="ml-5" color="primary" pill>
                10
              </MDBBadge>
            </MDBListGroupItem>
            <MDBListGroupItem className="text-left" href="#" hover>
              Morbi leo risus
            </MDBListGroupItem>
            <MDBListGroupItem className="text-left" href="#" hover>
              Porta ac consectetur ac
            </MDBListGroupItem>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

    </MDBRow>
    </MDBContainer>
  );
};

export default CardExample;
