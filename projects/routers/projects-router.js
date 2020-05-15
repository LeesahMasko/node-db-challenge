const express = require("express");

const Projects = require("../models/projects-model");

const router = express.Router();

router.get("/", (req, res) => {
  Projects.getProjects()
  .then(projects => {
    res.status(200).json(projects);
  })
  .catch(err => {
    console.log("error", err);
    res.status(500).json({ message: "Failed to get projects" });
  });
});

router.post("/", (req, res) => {
  if (!req.body || !req.body.project_name) {
    return res.status(400).json({ message: 'Please provide a name' }).end();
  }

  Projects.addProject(req.body)
  .then(projects => {
    res.status(200).json(projects);
  })
  .catch(err => {
    console.log("error", err);
    res.status(400).json({ message: "Failed to add Projects" });
  });
});

module.exports = router;
