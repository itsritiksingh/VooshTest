const express = require("express");
const router = express.Router();
const { bookModel } = require("../models/books.js");

router.get("/", (req, res) => {
  bookModel
    .find()
    .then((books) => res.json(books))
    .catch((e) => {
      console.log(e);
      res.json(e);
    });
});

// router.route("/").get().post()

router.get("/:id", (req, res) => {
  const { id } = req.params;
  bookModel
    .findById(id)
    .then((books) => res.json(books))
    .catch((e) => {
      console.log(e);
      res.json(e);
    });
});

router.post("/", (req, res) => {
  const book = new bookModel(req.body);

  book
    .save()
    .then((r) => res.json(r))
    .catch((e) => {
      console.log(e);
      res.json(e);
    });
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  bookModel
    .updateOne({_id:id}, { $set: req.body }, { upsert: true })
    .then((books) => res.json(books))
    .catch((e) => {
      console.log(e);
      res.json(e);
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  bookModel
    .deleteOne({ _id: id })
    .then((books) => res.json(books))
    .catch((e) => {
      console.log(e);
      res.json(e);
    });
});

module.exports = { router };
