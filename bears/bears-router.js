const router = require("express").Router();
const db = require("./bears-model");

router.get("/", (req, res) => {
  db.find()
    .then(bears => {
      res.status(200).json(bears);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
    db.findById(req.params.id)
      .then(bear => {
        if (bear) {
          res.status(200).json(bear);
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
      .then(bear => {
        if (!name) {
          res.status(404).json({ message: "The name field is required." });
        } else {
          res.status(201).json(bear);
        }
      })
      .catch(err => {
        res.status(500).json({ message: "Could not add bear" });
      });
  });

  router.put("/:id", (req, res) => {
    db.update(req.params.id, req.body).then(response => {
      res
        .status(200)
        .json({ message: "Bear updated successfully" })
        .catch(err => {
          res.status(500).json(err);
        });
    });
  });
  
  router.delete("/:id", (req, res) => {
    db.remove(req.params.id)
      .then(count => {
        res.status(200).json({ message: "Bear has been successfully deleted" });
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });

module.exports = router;
