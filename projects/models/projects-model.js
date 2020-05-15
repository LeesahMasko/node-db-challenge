const db = require('../../data/dbConfig');

// function getResources() {
//   return db("resources");
// }

function getProjects() {
  return db("projects")
}

function findById(id) {
  return db("projects").where("id", id).first();
}

function addProject(newProject) {
  return db("projects")
  .insert(newProject, "id")
  .then(ids => {
    return findById(ids[0]);
  });
}

// function getTasks() {
//   return db("tasks")
//   .join("projects", "tasks.description")
//   .where("project_id", projectId)
// }

// module.exports = {
//   getResources,
//   getProjects,
//   getTasks
// }

module.exports = {
  getProjects,
  addProject
}
