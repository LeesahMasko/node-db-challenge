const express = require("express");

const Resources = require("../models/resources-model");

const router = express.Router();

router.get("/", (req, res) => {
  Resources.getResources()
  .then(resources => {
    res.status(200).json(resources);
  })
  .catch(err => {
    console.log("error", err);
    res.status(500).json({ message: "Failed to retrieve resources" });
  });
});

router.post("/", (req, res) => {
  if (!req.body || !req.body.name) {
    return res.status(400).json({ message: 'Please provide a name' }).end();
  }

  Resources.addResource(req.body)
  .then(resources => {
    res.status(200).json(resources);
  })
  .catch(err => {
    console.log("error", err);
    res.status(400).json({ message: "Failed to add resource" });
  });
});

module.exports = router;
