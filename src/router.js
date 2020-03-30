const express = require("express");
const router = express.Router();
const Book = require("./Book");

router
  .get("/:uid", async (req, res) => {
    const bookDocs = await Book.find({ uid: req.params.uid });

    res.json(bookDocs);
  })
  .put("/:uid", async (req, res) => {
    try {
      await Book.create(req.body);

      res.status(200).end();
    } catch (error) {
      res.status(400).end();
    }
  })
  .delete("/:uid/:bid", async (req, res) => {
    try {
      const { deletedCount } = await Book.deleteOne({
        uid: req.params.uid,
        id: req.params.bid
      });

      res.status(200).send(deletedCount);
    } catch (error) {
      res.status(500).end();
    }
  });

module.exports = router;
