const express = require("express");

const Tasks = require("../models/tasks-model");

const router = express.Router();

router.get("/", (req, res) => {
  Tasks.getTasks()
  .then(tasks => {
    res.status(200).json(tasks);
  })
  .catch(err => {
    console.log("error", err);
    res.status(500).json({ message: "Failed to retrieve tasks" });
  });
});

router.post("/", (req, res) => {
  if (!req.body || !req.body.description) {
    return res.status(400).json({ message: 'Please provide a description' }).end();
  }

  Tasks.addTask(req.body)
  .then(tasks => {
    res.status(200).json(tasks);
  })
  .catch(err => {
    console.log("error", err);
    res.status(400).json({ message: "Failed to get projects" });
  });
});

module.exports = router;
