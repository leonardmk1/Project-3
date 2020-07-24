const mediaController = require("express").Router();
const db = require("../../models");

mediaController.post("/", (req, res) => {
  const { title, picture, releaseDate, overview, id, mediaType, rating } = req.body;
  console.log("controller media type", mediaType);

  db.Media.create({ title, picture, releaseDate, overview, id, mediaType, rating })
    .then((media) => res.json(media))

    .catch((err) => res.json(err));
});

mediaController.get("/:id", (req, res) => {
  db.Media.find({ id: req.params.id })
    .then((results) => {
      if (!results.rating) {
        db.Reviews.find({ movieId: req.params.id }).then((results2) => {
          console.log(
            results2.reduce(
              (total, currentRating) => total + currentRating.rating,
              0
            ) / results2.length
          );
          results[0].rating = Math.round(
            results2.reduce(
              (total, currentRating) => total + currentRating.rating,
              0
            ) / results2.length
          );
          // console.log(results);
          res.json(results);
        });
      } else {
        res.json(results);
      }
    })
    .catch((error) => {
      if (error) throw error;
    });
});

mediaController.get("/all/:type", (req, res) => {
  db.Media.find({ mediaType: req.params.type })
    .then((results) => res.json(results))
    .catch((error) => {
      if (error) throw error;
    });
});

mediaController.post("/addRating", (req, res) => {
  db.Media.find({ id: req.body.movieId })
    .then((results) => {
      let updatedMedia = results[0];
      updatedMedia.ratings.push(req.body.rating);
      console.log(updatedMedia.ratings)
      updatedMedia.rating =
        updatedMedia.ratings.reduce(
          (total, currentRating) => total + currentRating,
          0
        ) / updatedMedia.ratings.length;
          console.log(updatedMedia.rating)
      db.Media.replaceOne({ id: req.body.movieId }, updatedMedia).then(
        (results) => {
          // console.log("results", results);
          res.json(results);
        }
      );
    })
    .catch((error) => {
      if (error) throw error;
    });
});

module.exports = mediaController;
