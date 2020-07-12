const mediaController = require("express").Router();
const db = require("../../models");

mediaController.post('/', (req, res) => {
    const { title, picture, releaseDate, overview, id } = req.body;
  
    db.Media.create({ title, picture, releaseDate, overview, id})
      .then(media => res.json(media))
      .catch(err => res.json(err));
});

mediaController.get("/:id", (req, res) => {
    db.Media.find({ id: req.params.id })
      .then((results) => {
        res.json(results);
      })
      .catch((error) => {
        if (error) throw error;
      });
  });

  module.exports = mediaController;
