import React, { useState, useEffect } from "react";
import {
  MDBContainer,
  MDBJumbotron,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdbreact";
import API from "../../lib/API";
import { FaStar } from "react-icons/fa";
import {Link} from "react-router-dom"
export default function TopRatedMovies() {
  const [movies, setMovies] = useState([]);


  const getTopRatedMovies = () => {
    API.Media.getAllOfType("movie").then((movieResponse) =>
    {
      let numberOfTopReviews = 10
      if(movieResponse.data.length < 10) numberOfTopReviews = movieResponse.data.length
      setMovies(movieResponse.data.splice(0, numberOfTopReviews))
      console.log(movies)
    }
  );
  }
  
useEffect(()=>{
  getTopRatedMovies();
},[])


  return (
    <div>
      <MDBContainer className="mt-5">
        <MDBJumbotron className="shadow-box-example hoverable" style={{borderRadius: "10px"}}>
          <h1 className="text-center">Top Rated Movies</h1>
          <MDBTable hover>
            <MDBTableHead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>All Users Rating</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {movies.map((movie, i)=> {
                const movieRating = Math.floor(movie.rating)
                console.log(movieRating)
              
                return ( 
                <tr>
                <td>{i + 1}</td>
                <td><Link to={`/details/${movie.id}`}>{movie.title}</Link></td>
                <td>
                  {isNaN(movieRating)? "no ratings yet" : [...Array(movieRating)].map((e, i) => (
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
