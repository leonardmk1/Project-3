const reviewsController = require("express").Router();
const db = require("../../models");

reviewsController.post('/', (req, res) => {
    const { title, movieId, rating, review, userId, date } = req.body;
  
    db.Reviews.create({ title, movieId, rating, review, userId, date})
      .then(review => res.json(review))
      .catch(err => res.json(err));
});

reviewsController.get("/:id", (req, res) => {
  console.log(req.params.id);
    db.Reviews.find({ movieId: req.params.id })
      .then((results) => {
        res.json(results);
      })
      .catch((error) => {
        if (error) throw error;
      });
  });



  reviewsController.put("/:id", (req, res) => {
    db.Reviews.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then((results) => {
      res.json(results);
    })
    .catch((error) => {
      if (error) throw error;
    });
  })

  reviewsController.delete("/:id", (req, res) => {
    db.Reviews.findById({ _id: req.params.id }, req.body)
    .then(results => results.remove())
    .then((results) => {
      res.json(results);
    })
    .catch((error) => {
      if (error) throw error;
    });
  })

  reviewsController.get("/user/:id", (req, res) => {
    console.log(req.params.id);
      db.Reviews.find({ userId: req.params.id })
        .then((results) => {
          res.json(results);
        })
        .catch((error) => {
          if (error) throw error;
        });
    });
  

  module.exports = reviewsController;
