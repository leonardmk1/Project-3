import React, { useEffect, useState } from "react";
import {
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBRating,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardText,
} from "mdbreact";
import API from "../../lib/API";
import RatingModal from "../../components/RatingModal/RatingModal";

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

  const [basic] = useState([
    {
      tooltip: "Very Bad",
    },
    {
      tooltip: "Poor",
    },
    {
      tooltip: "Ok",
      choosed: true,
    },
    {
      tooltip: "Good",
    },
    {
      tooltip: "Excellent",
    },
  ]);

  return (
    <MDBContainer>
      <div className="mt-4">
        <h1 className="title">{media.title}</h1>
        <hr></hr>
        <MDBRow className="mt-4">
          <MDBCol size="3">
            <img
              style={{ width: "250px", borderRadius: "2%" }}
              alt="poster"
              className="z-depth-3 mr-5"
              src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${media.picture}`}
            ></img>
          </MDBCol>
          <MDBCol className="text-left ml-2" size="6">
            <div className="card--content">
              <p>
                <h4 className="text-center">Story Line</h4>
                {media.overview}
              </p>
            </div>
            <h5 className="text-center">Details</h5>
            <hr></hr>
            <MDBRow className="text-center">
              <MDBCol>
                <p>
                  <p>Actors</p>
                  <small>{omdbDetails.Actors}</small>
                </p>
                <p>
                  <p>Release Date</p>
                  <small>{omdbDetails.Released}</small>
                </p>
              </MDBCol>
              <MDBCol>
                <p>
                  <p>Director</p>
                  <small>{omdbDetails.Director}</small>
                </p>
                <p>
                  <p>MPAA Rating</p>
                  <small>{omdbDetails.Rated}</small>
                </p>
              </MDBCol>
            </MDBRow>
            <hr></hr>
            <div className="text-center">
              <p>
                <h5 className="mt-4">Streaming On</h5>
                {whereToWatch.map((service) => (
                  <a href={service.url} target="blank">
                    <img
                      src={
                        service.display_name === "FandangoMoviesIVAUS"
                          ? "https://images.squarespace-cdn.com/content/v1/50710c28c4aa65eb3b63d154/1437641130549-VHT5SA623JNOF8MVBYHW/ke17ZwdGBToddI8pDm48kE_3_CdZkl8eY4Tr786I7c1Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIEdLjb7ct2nb1ydMk7ES0zIzkluNQ_lSuJMCmL_llLUA/fandango-logo.png?format=300w"
                          : service.icon
                      }
                      alt={service.display_name}
                      style={{ margin: "15px", width: "92px" }}
                    />
                  </a>
                ))}
              </p>
            </div>
          </MDBCol>
          <MDBCol>
            <div>
              <h5>Movie Stream Rating</h5>
              <hr></hr>
              <MDBRating
                data={basic}
                style={{ marginLeft: "16px", marginTop: "5px" }}
              />
              <hr></hr>
              <br></br>
              <RatingModal title={media.title} id={media.id} />
            </div>
          </MDBCol>
        </MDBRow>
        <div>
          <hr></hr>
          <p>
            <h2 className="text-center mt-4">NY Times Movie Review</h2>
            {criticalReview.map((review) => (
              <p className="text-center mt-4">
                <p>{review.headline}</p>
                <p>by: {review.byline}</p>
                {review.summary_short}...
                <a href={review.link.url} target="blank">
                  Read more
                </a>
              </p>
            ))}
          </p>
          <hr></hr>
          <p>
            <h2 className="text-center mt-4">User Reviews</h2>
            <br></br>
            {userReviews.map((review) => (
                <MDBCard className="mt-4">
                  <MDBCardBody>
                    <MDBCardHeader className="bg-white">
                      <MDBRow>
                        <MDBCol size="3"><strong>{review.userId}</strong> says...</MDBCol>
                        <MDBCol size="6" className="text-center"><h5>{review.title}</h5></MDBCol>
                        <MDBCol size="2" className="text-right">
                          {review.rating} out of 5 stars!
                        </MDBCol>
                      </MDBRow>
                    </MDBCardHeader>
                    <MDBCardText>
                      <p className="mt-2">"{review.review}"</p>
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
            ))}
          </p>
        </div>
      </div>
    </MDBContainer>
  );
}
