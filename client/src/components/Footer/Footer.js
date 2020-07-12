import React from "react";
import { MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-3 mt-4">
      <MDBContainer fluid className="text-center text-md-left pb-3">
        <MDBRow className="text-center">
            <MDBContainer>
              &copy; {new Date().getFullYear()} Copyright:{" "}
              <a href="https://www.mdbootstrap.com"> MovieStream.com </a>
            </MDBContainer>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
};

export default FooterPage;
