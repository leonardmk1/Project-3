import React, { useState } from "react";
import { MDBBtn, MDBRow, MDBCol, MDBContainer } from "mdbreact";
import API from "../../lib/API";
import { Redirect } from "react-router-dom";


export default function SearchContent() {
  const [query, setQuery] = useState("");
  const [content, setContent] = useState([]);
  const [redirect, setRedirect] = useState(false);
  const [redirectToId, setRedirectToId] = useState(false);

  const searchContent = async (e) => {
    e.preventDefault();
    console.log("submitting");

    const url = `https://api.themoviedb.org/3/search/multi?api_key=f39d136c70f6f27a34d8587c3862c230&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setContent(data.results);
    } catch (err) {
      console.log(err);
    }
  };

  const storeContentInDatabase = (title, name, picture, releaseDate, firstAirDate, overview, id) => {
    let mediaType = "movie"
    if(!title){
      title = name
      releaseDate = firstAirDate
      mediaType = "show"
    } 
    setRedirectToId(id);
    console.log("serch content media type", mediaType)
    API.Media.create(title, picture, id, releaseDate, overview, mediaType)
      .then(function(res){
        console.log(res);
        setRedirect(true)
      }
      )
      .catch((err) => console.log(err));
  };

  

  return (
    <MDBContainer>
      <form className="form" onSubmit={searchContent}>
        <label className="label" htmlFor="query">
          Title
        </label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="Enter Movie or TV Show"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <MDBBtn rounded color="blue" className="button" type="submit">
          Search
        </MDBBtn>
      </form>
      <div>
        {content.map((content) => (
         
            <div
              className="card shadow-box-example hoverable result-card w-75 mx-auto mt-3"
              key={content.id}
            >
              <MDBRow>
                <MDBCol>
                  <img
                    className="card--image shadow-box-example hoverable"
                    src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${content.poster_path}`}
                    alt={content.title + " poster"}
                    style={{ width: "250px" }}
                  />
                </MDBCol>
                <MDBCol>
                  <div className="card--content">
                    <h3 className="card--title">{content.title ? content.title : content.name}</h3>
                    <br></br>
                    {/* <p>
                      <small>Release Date {content.release_date ? content.release_date : content.first_air_date}</small>
                    </p> */}
                    <p className="card--desc">{content.overview}</p>
                  </div>
                  <MDBBtn color="blue" onClick={() => {storeContentInDatabase(content.title, content.name, content.poster_path, content.release_date, content.first_air_date, content.overview, content.id )}}>
                    Details
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </div>
         
        ))}
      </div>
      {redirect && <Redirect to={`/Details/${redirectToId}`}/>}
    </MDBContainer>
  );
}
