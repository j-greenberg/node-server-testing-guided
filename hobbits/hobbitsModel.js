const db = require('../data/dbConfig.js');

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById,
};

async function insert(hobbit) {
  // add the hobbit to the db
  // return 281 on success
  // should return message saying "Hobbit created successfully"
  return db("hobbits").insert(hobbit, "id"); 
  
  return null;
}

async function update(id, changes) {
  return null;
}

function remove(id) {
  return null;
}

function getAll() {
  return db('hobbits');
}

function findById(id) {
  return null;
}
