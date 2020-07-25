import React, {useEffect, useState} from "react";
import {
  MDBContainer,
  // MDBListGroup,
  // MDBListGroupItem,
  // MDBRow,
  // MDBCol,
  MDBJumbotron,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdbreact";
import API from "../../lib/API";
import { FaStar } from "react-icons/fa";
import {Link} from "react-router-dom"


export default function TopRatedTVShows() {
  const [show, setShow] = useState([]);


  const getTopRatedTVShows = () => {
    API.Media.getAllOfType("show").then((showResponse) => {
      let numberOfTopReviews = 10;
      if (showResponse.data.length < 10)
        numberOfTopReviews = showResponse.data.length;
      setShow(showResponse.data.splice(0, numberOfTopReviews));
      console.log(showResponse)
    });
  };
  
useEffect(()=>{
  getTopRatedTVShows();
},[])


  return (
    <div>
      <MDBContainer className="mt-5">
      <MDBJumbotron className="shadow-box-example hoverable" style={{borderRadius: "10px"}}>
          <h1 className="text-center">Top Rated TV Shows</h1>
          <MDBTable hover>
            <MDBTableHead>
              <tr>
                <th><strong>#</strong></th>
                <th>Title</th>
                <th>All Users Rating</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
            {show.map((show, i)=> {
                const showRating = Math.floor(show.rating)
                console.log(showRating)
                return ( 
                <tr>
                <td>{i + 1}</td>
                <td><Link to={`/details/${show.id}`}>{show.title}</Link></td>
                <td>
                  {[...Array(showRating)].map((e, i) => (
                    <FaStar
                      icon="star"
                      className="star"
                      size={20}
                      key={i}
                      color="ffe207"
                    />
                  ))}
                </td>
              </tr>
                )
              })
            }
            </MDBTableBody>
          </MDBTable>
        </MDBJumbotron>
      </MDBContainer>
    </div>
  );
}
