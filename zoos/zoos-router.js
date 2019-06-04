const router = require("express").Router();
const db = require("./zoos-model");

router.get("/", (req, res) => {
  db.find()
    .then(zoos => {
      res.status(200).json(zoos);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;