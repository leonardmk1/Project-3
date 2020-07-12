import axios from "axios";

export default {
  Users: {
    login: function (email, password) {
      return axios.post("/api/users/login", { email, password });
    },

    create: function (email, password) {
      return axios.post("/api/users", { email, password });
    },

    getMe: function (authToken) {
      return axios.get("/api/users/me", {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
    },
  },

  Media: {
    create: function (title, picture, id, releaseDate, overview) {
      return axios.post("/api/media", {
        title,
        picture,
        id,
        releaseDate,
        overview,
      });
    },

    getMovie: function (id) {
      return axios.get("/api/media/" + id);
    },

    getUttey: function (title) {
      console.log(title);
      return axios({
        method: "GET",
        url:
          "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup",
        headers: {
          "content-type": "application/octet-stream",
          "x-rapidapi-host":
            "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
          "x-rapidapi-key":
            "337aec419fmsheb6f365e9f79433p1cc854jsn3d5a519c3225",
          useQueryString: true,
        },
        params: {
          term: title,
          country: "us",
        },
      })
        
    },
  },

  Secrets: {
    getAll: function (authToken) {
      return axios.get("/api/secrets", {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
    },
  },
};
