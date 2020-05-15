const db = require('../../data/dbConfig');

function getResources() {
  return db("resources")
}

function findById(id) {
  return db("resources").where("id", id).first();
}

function addResource(newResource) {
  return db("resources")
  .insert(newResource, "id")
  .then(ids => {
    return findById(ids[0]);
  });
}

module.exports = {
  getResources,
  addResource
}
