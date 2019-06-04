const knex = require('knex');

const knexConfig = {
    client: 'sqlite3',
    connection: {
        filename: './data/bears.db3'
    },
    useNullAsDefault: true
}

const db = knex(knexConfig);

module.exports = {
    find,
    findById,
    add,
    update,
    remove
}

function find() {
    return db('bears')
}

function findById(id) {
    return db("bears")
      .where({ id })
      .first();
  }
  
  function add(bear) {
    return db("bears")
      .insert(bear)
      .then(bear => {
        return findById(bear[0]);
      });
  }
  
  function update(id, changes) {
    return db("bears")
      .where({ id })
      .update(changes);
  }
  
  function remove(id) {
    return db("bears")
      .where("id", id)
      .del();
  }
  