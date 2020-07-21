const mediaController = require("express").Router();
const db = require("../../models");

mediaController.post('/', (req, res) => {
    const { title, picture, releaseDate, overview, id, mediaType } = req.body;
  
    db.Media.create({ title, picture, releaseDate, overview, id, mediaType})
      .then(media => res.json(media))
      .catch(err => res.json(err));
});

mediaController.get("/:id", (req, res) => {
    db.Media.find({ id: req.params.id })
      .then((results) => {
        if(!results.ratings){
          db.Reviews.find({movieId : req.params.id}).then(
            results2 => {
              console.log(results2.reduce((total, currentRating) => (
                total + currentRating.rating 
              ), 0)/results2.length)
              results[0].ratings = Math.round(results2.reduce((total, currentRating) => (
                total + currentRating.rating 
              ), 0)/results2.length)
              console.log(results);
              res.json(results);
            }
          )
        } else{
          res.json(results)
        }
       
      })
      .catch((error) => {
        if (error) throw error;
      });
  });

  module.exports = mediaController;
