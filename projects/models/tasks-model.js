const db = require('../../data/dbConfig');

function getTasks() {
  return db("tasks")
}

function findById(id) {
  return db("tasks").where("id", id).first();
}

function addTask(newTask) {
  return db("tasks")
  .insert(newTask, "id")
  .then(ids => {
    return findById(ids[0]);
  });
}

module.exports = {
  getTasks,
  addTask
}
