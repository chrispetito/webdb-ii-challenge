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

router.get("/:id", (req, res) => {
  db.findById(req.params.id)
    .then(zoo => {
      if (zoo) {
        res.status(200).json(zoo);
      } else {
        res.status(400).json({ message: "Zoo not found" });
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  db.add(req.body)
    .then(zoo => {
      res.status(201).json(zoo);
    })
    .catch(err => {
      res.status(500).json({ message: "Could not add zoo" });
    });
});

module.exports = router;
