import React from "react";
import {
  MDBContainer,
  MDBListGroup,
  MDBListGroupItem,
  MDBRow,
  MDBCol,
  MDBJumbotron,
} from "mdbreact";

export default function TopRatedMovies() {
  return (
    <div>
      <MDBContainer className="mt-5">
        <MDBJumbotron className="shadow-lg"> 
          <h1 className="text-center">Top Rated Movies</h1>
          <MDBRow>
            <MDBCol size="10">
              <MDBListGroup style={{ width: "100%", marginTop: "40px" }}>
                <MDBListGroupItem>Cras justo odio</MDBListGroupItem>
                <MDBListGroupItem>Dapibus ac facilisis in</MDBListGroupItem>
                <MDBListGroupItem>Morbi leo risus</MDBListGroupItem>
                <MDBListGroupItem>Porta ac consectetur ac</MDBListGroupItem>
                <MDBListGroupItem>Vestibulum at eros</MDBListGroupItem>
                <MDBListGroupItem>Cras justo odio</MDBListGroupItem>
                <MDBListGroupItem>Dapibus ac facilisis in</MDBListGroupItem>
                <MDBListGroupItem>Morbi leo risus</MDBListGroupItem>
                <MDBListGroupItem>Porta ac consectetur ac</MDBListGroupItem>
                <MDBListGroupItem>Vestibulum at eros</MDBListGroupItem>
              </MDBListGroup>
            </MDBCol>
            <MDBCol size="1" className="text-center">
                All Ratings
            </MDBCol>
            <MDBCol size="1" className="text-center">
                My Ratings
            </MDBCol>
          </MDBRow>
        </MDBJumbotron>
      </MDBContainer>
    </div>
  );
}
