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
      <div className="m-4">
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
                <h4>Story Line</h4>
                {media.overview}
              </p>
            </div>
            <h5>Details</h5>
            <hr></hr>
            <MDBRow>
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
                <h5>Streaming On</h5>
                {whereToWatch.map((service) => (
                  <a href={service.url} target="blank">
                    <img
                      src={
                        service.display_name === "FandangoMoviesIVAUS"
                          ? "http://lexiconlabs.io/wp-content/uploads/2016/02/fandango_logo-768x384.jpg"
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
        <br></br>
        <div>
          <hr></hr>
          <p>
            <h2 className="text-left">NY Times Movie Review</h2>
            <br></br>
            {criticalReview.map((review) => (
              <p className="text-left">
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
            <h2 className="text-left">User Reviews</h2>
            <br></br>
            {userReviews.map((review) => (
              <div className="text-left">
                <strong>{review.userId}</strong> reviewed{" "}
                <strong>{review.title}</strong> 
                {/* on{" "}
                <strong>{review.date}</strong> */}
                <p className="text-center mt-4">{review.rating} out of 5 stars!</p>
                <br></br>
                <p>"{review.review}"</p>
                <hr></hr>
              </div>
            ))}
          </p>
        </div>
      </div>
    </MDBContainer>
  );
}
