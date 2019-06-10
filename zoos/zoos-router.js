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
  const { name } = req.body;
  db.add(req.body)
    .then(zoo => {
      if (!name) {
        res.status(404).json({ message: "The name field is required." });
      } else {
        res.status(201).json(zoo);
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Could not add zoo" });
    });
});

router.put("/:id", (req, res) => {
  db.update(req.params.id, req.body).then(response => {
    res
      .status(200)
      .json({ message: "Zoo updated successfully" })
      .catch(err => {
        res.status(500).json(err);
      });
  });
});

router.delete("/:id", (req, res) => {
  db.remove(req.params.id)
    .then(count => {
      res.status(200).json({ message: "Zoo has been successfully deleted" });
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
