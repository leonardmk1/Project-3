import React, { useEffect, useState } from "react";
import {
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBRating,
} from "mdbreact";
import API from "../../lib/API";

export default function Details() {
  const [media, setMedia] = useState({});
  const [whereToWatch, setWhereToWatch] = useState([]);
  console.log(window.location.pathname.substr(9));
  async function getTheMovie() {
    const res = await API.Media.getMovie(window.location.pathname.substr(9))
      .then((response) => {
        setMedia(response.data[0]);
        API.Media.getUttey(response.data[0].title)
          .then((response) => {
            console.log(response);
            setWhereToWatch(
              response.data.results[0].locations
            );
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((err) => {
        if (err) throw err;
      });
  }
  useEffect(() => {
    getTheMovie();
  }, []);

    fetch(
      `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${media.title}&api-key=xo5NLGLQ37HObAYWKVopO5oXMMhZ4SVW`
    )
      .then((response) => response.json())
      .then((data) => console.log(data));

  fetch(`http://www.omdbapi.com/?t=${media.title}&apikey=434727b0`)
    .then((response) => response.json())
    .then((data) => console.log(data));

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
            <p>
              <h5>Release Date</h5>
              <p>{media.releaseDate}</p>
            </p>
            <div className="text-center">
              {/* <MDBBtn outline color="blue" className="trailer" onClick={``}>
                Watch Trailer
              </MDBBtn> */}
              <hr></hr>
              <p>
                <h5>Streaming On</h5>
                {whereToWatch.map((service) => (
                  <a href={service.url} target="blank"><img src={service.icon}
                  alt={service.display_name}
                  style={{margin:"15px"}}/></a>
                ))}
              </p>
            </div>
          </MDBCol>
          <MDBCol>
            <div>
              <h5>Movie Stream Rating</h5>
              <MDBRating data={basic} style={{marginLeft:"16px", marginTop:"5px"}} />
            </div>
          </MDBCol>
        </MDBRow>
        <br></br>
        <div>
          <hr></hr>
          <p>
            <h2 className="text-left">Critics Review</h2>
            <p className="text-left">{media.overview}</p>
          </p>
          <hr></hr>
          <p>
            <h2 className="text-left">User Reviews</h2>
            <p className="text-left">{media.overview}</p>
          </p>
        </div>
      </div>
    </MDBContainer>
  );
}
