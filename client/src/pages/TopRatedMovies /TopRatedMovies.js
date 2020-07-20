import React from "react";
import {
  MDBContainer,
  MDBListGroup,
  MDBListGroupItem,
  MDBRow,
  MDBCol,
  MDBJumbotron,
  MDBRating,
} from "mdbreact";

export default function TopRatedMovies() {
  return (
    <div>
      <MDBContainer className="mt-5">
        <MDBJumbotron className="shadow-lg"> 
          <h1 className="text-center">Top Rated Movies</h1>
          <MDBRow>
            <MDBCol size="8">
              <MDBListGroup className="text-left" style={{ width: "100%", marginTop: "40px" }}>
                <MDBListGroupItem href="#" hover>Cras justo odio</MDBListGroupItem>
                <MDBListGroupItem href="#" hover>Dapibus ac facilisis in</MDBListGroupItem>
                <MDBListGroupItem href="#" hover>Morbi leo risus</MDBListGroupItem>
                <MDBListGroupItem href="#" hover>Porta ac consectetur ac</MDBListGroupItem>
                <MDBListGroupItem href="#" hover>Vestibulum at eros</MDBListGroupItem>
                <MDBListGroupItem href="#" hover>Cras justo odio</MDBListGroupItem>
                <MDBListGroupItem href="#" hover>Dapibus ac facilisis in</MDBListGroupItem>
                <MDBListGroupItem href="#" hover>Morbi leo risus</MDBListGroupItem>
                <MDBListGroupItem href="#" hover>Porta ac consectetur ac</MDBListGroupItem>
                <MDBListGroupItem href="#" hover>Vestibulum at eros</MDBListGroupItem>
              </MDBListGroup>
            </MDBCol>
            <MDBCol size="2" className="text-center">
                All Ratings
                <MDBRating style={{marginTop:"23px"}}></MDBRating>
            </MDBCol>
            <MDBCol size="2" className="text-center">
                My Ratings
                <MDBRating style={{marginTop:"23px"}}></MDBRating>

            </MDBCol>
          </MDBRow>
        </MDBJumbotron>
      </MDBContainer>
    </div>
  );
}
