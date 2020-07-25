import React, { useEffect, useState } from "react";
import {
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBCardHeader,
  MDBCardText,
  MDBJumbotron,
} from "mdbreact";
import API from "../../lib/API";
import RatingModal from "../../components/RatingModal/RatingModal";
import { FaStar } from "react-icons/fa";
import "./Details.css";

export default function Details() {
  const [media, setMedia] = useState({});
  const [whereToWatch, setWhereToWatch] = useState([]);
  const [criticalReview, setCriticalReview] = useState([]);
  const [omdbDetails, setOMDBDetails] = useState({});
  const [userReviews, setUserReviews] = useState([]);

  // console.log(window.location.pathname.substr(9));
  async function getTheMovie() {
    const res = await API.Media.getMovie(window.location.pathname.substr(9))
      .then((response) => {
        setMedia(response.data[0]);
        API.Media.getUttey(response.data[0].title)
          .then((response) => {
            console.log(response);
            setWhereToWatch(response.data.results[0].locations);
          })
          .catch((error) => {
            console.log(error);
          });
        API.Media.getCriticalReview(response.data[0].title)
          .then((nytResponse) => {
            console.log(nytResponse);
            setCriticalReview(
              nytResponse.data.results.filter(
                (movie) =>
                  movie.display_title === response.data[0].title &&
                  movie.opening_date.substr(0, 3) ===
                    response.data[0].releaseDate.substr(0, 3)
              )
            );
          })
          .catch((error) => {
            console.log(error);
          });

        API.Media.getOMDBDetails(response.data[0].title)
          .then((omdbResponse) => {
            console.log(omdbResponse);
            setOMDBDetails(omdbResponse.data);
          })
          .catch((error) => {
            console.log(error);
          });

        API.Reviews.getReview(window.location.pathname.substr(9)).then(
          function (res) {
            setUserReviews(res.data);
          }
        );
      })
      .catch((err) => {
        if (err) throw err;
      });
  }
  useEffect(() => {
    getTheMovie();
  }, []);

  

  return (
    <MDBContainer>
      <MDBJumbotron className="shadow-box-example hoverable my-4" style={{borderRadius: "10px"}}>
      <div>
        <h1 className="title">{media.title}</h1>
        <hr></hr>
        <MDBRow className="mt-4">
          <MDBCol size="12" md="4" lg="3">
            <img
              style={{ width: "200px", borderRadius: "2%" }}
              alt="poster"
              className="mr-5 shadow-box-example hoverable"
              src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${media.picture}`}
            ></img>
          </MDBCol>
          <MDBCol className="text-left ml-2" size="6">
            <div className="card--content">
                <h4 className="text-center"><strong>Story Line</strong></h4>
                {media.overview}
            </div>
            <h5 className="text-center"><strong>Details</strong></h5>
            <hr></hr>
            <MDBRow className="text-center">
              <MDBCol>
                <div>
                  <p>Actors</p>
                  <small>{omdbDetails.Actors}</small>
                </div>
                <br/>
                <div>
                  <p>Release Date</p>
                  <small>{omdbDetails.Released}</small>
                </div>
              </MDBCol>
              <MDBCol>
                <div>
                  <p>Director</p>
                  <small>{omdbDetails.Director}</small>
                </div>
                <br/>
                <div>
                  <p>MPAA Rating</p>
                  <small>{omdbDetails.Rated}</small>
                </div>
              </MDBCol>
            </MDBRow>
            <hr></hr>
            <div className="text-center">
                <h5 className="mt-4"><strong>Streaming On</strong></h5>
                {whereToWatch.map((service) => (
                  <a href={service.url} target="blank" key={service.display_name}>
                    <img
                      src={
                        service.display_name === "FandangoMoviesIVAUS"
                          ? "https://images.squarespace-cdn.com/content/v1/50710c28c4aa65eb3b63d154/1437641130549-VHT5SA623JNOF8MVBYHW/ke17ZwdGBToddI8pDm48kE_3_CdZkl8eY4Tr786I7c1Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIEdLjb7ct2nb1ydMk7ES0zIzkluNQ_lSuJMCmL_llLUA/fandango-logo.png?format=300w"
                          : service.icon
                      }
                      alt={service.display_name}
                      className="shadow-box-example hoverable m-2"
                      style={{ margin: "15px", width: "92px" }}
                    />
                  </a>
                ))}
            </div>
          </MDBCol>
          <MDBCol>
            <div>
              <h5><strong>Movie Stream Rating</strong></h5>
              <hr></hr>
              {[...Array(media.rating)].map((e, i) => (
                       <FaStar
                        icon="star"
                        className="star"
                        size={20}
                        key={i}
                        color="ffe207"
                      /> 
                    ))}
              <hr></hr>
              <br></br>
              <RatingModal title={media.title} id={media.id} />
            </div>
          </MDBCol>
        </MDBRow>
        <div>
          <hr></hr>
            <h2 className="text-center mt-4"><strong>NY Times Movie Review</strong></h2>
            {criticalReview.map((review) => (
              <div className="text-center mt-4" key={review.headline}>
                <p>{review.headline}</p>
                <p>by: {review.byline}</p>
                {review.summary_short}...
                <a href={review.link.url} target="blank">
                  Read more
                </a>
              </div>
            ))}
          <hr></hr>
            <h2 className="text-center mt-4"><strong>User Reviews</strong></h2>
            {userReviews.map((review) => (
              <div className="shadow-box-example hoverable my-4" style={{borderRadius: "10px"}} key={review._id}>
                <MDBCardHeader className="header">
                  <MDBRow>
                    <MDBCol className="text-left mr-5 text-white">
                      <strong>{review.username || "anonymous"}</strong>
                    </MDBCol>
                    <MDBCol className="text-right ml-5 yellow-text">
                    {[...Array(review.rating)].map((e, i) => (
                       <FaStar
                        icon="star"
                        className="star"
                        size={20}
                        key={i}
                      /> 
                    ))}
                    </MDBCol>
                  </MDBRow>
                </MDBCardHeader>
                  <MDBRow>
                    <MDBCol size="2">
                      <img
                        src={review.profilePic ||  "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}
                        className="img-fluid shadow-lg my-4"
                        style={{
                          width: "100px",
                          height: "100px",
                          zIndex: "4",
                          borderRadius: "50px",
                          marginLeft: "auto",
                          marginRight: "auto",
                        }}
                      />
                    </MDBCol>
                    <MDBCol size="10">
                      <div className="text-left mt-4">{review.review} </div>
                    </MDBCol>
                  </MDBRow>
              </div>
            ))}
        </div>
      </div>
      </MDBJumbotron>
    </MDBContainer>
  );
}
