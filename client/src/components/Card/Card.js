import React, { useState, useEffect } from "react";
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
import API from "../../lib/API";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const CardExample = () => {
  const [movies, setMovies] = useState([]);
  const [show, setShow] = useState([]);
  const [trending, setTrending] = useState([]);

  const getTopRatedMovies = () => {
    API.Media.getAllOfType("movie").then((movieResponse) => {
      let numberOfTopReviews = 3;
      if (movieResponse.data.length < 3)
        numberOfTopReviews = movieResponse.data.length;
      setMovies(movieResponse.data.splice(0, numberOfTopReviews));
      console.log(movies);
    });
  };

  const getTopRatedTVShows = () => {
    API.Media.getAllOfType("show").then((showResponse) => {
      let numberOfTopReviews = 3;
      if (showResponse.data.length < 3)
        numberOfTopReviews = showResponse.data.length;
      setShow(showResponse.data.splice(0, numberOfTopReviews));
      console.log(showResponse);
    });
  };

  const getTrending = () => {
    API.Media.getAll().then((response) => {
      let numberOfTrending = 3;
      if (response.data.length < 3)  
      numberOfTrending = response.data.length
      console.log(response);
      setTrending(response.data.splice(0, numberOfTrending));
    });
  };

  useEffect(() => {
    getTopRatedMovies();
    getTopRatedTVShows();
    getTrending();
  }, []);

  return (
    <MDBContainer size="md" className="my-4">
      <MDBRow>
        <MDBCol md="4" className="mb-2 px-0">
          <MDBCard
            className="shadow-box-example hoverable w-100"
            style={{ borderRadius: "10px"  }}
          >
            <MDBCardBody>
              <MDBCardTitle className="text-center">
                Top Rated Movies
              </MDBCardTitle>
              {movies.map((movie, i) => {
                return (
                  <>
                    <MDBListGroupItem href={`/details/${movie.id}`} hover className="text-left">
                      {movie.title}
                    </MDBListGroupItem>
                  </>
                );
              })}
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol md="4" className="mb-2 ">
          <MDBCard
            className="shadow-box-example hoverable w-100"
            style={{ borderRadius: "10px" }}
          >
            <MDBCardBody>
              <MDBCardTitle className="text-center">
                Top Rated TV Shows
              </MDBCardTitle>
              {show.map((show, i) => {
                return (
                  <>
                    <MDBListGroupItem href={`/details/${show.id}`} hover className="text-left">
                      {show.title}
                    </MDBListGroupItem>
                  </>
                );
              })}
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="4"className="mb-2 px-0">
          <MDBCard
            className="shadow-box-example hoverable w-100"
            style={{ borderRadius: "10px"  }}
          >
            <MDBCardBody>
              <MDBCardTitle className="text-center">Trending</MDBCardTitle>
              {trending.map((trending, i) => {
                return (
                  <>
                    <MDBListGroupItem href={`/details/${trending.id}`} hover className="text-left">
                      {trending.title}
                     
                    </MDBListGroupItem>
                  </>
                );
              })}
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default CardExample;
