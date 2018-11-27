var orm = require('../config/orm.js');


// 1. create code to call ORM functions using burger specific input for the ORM.
// methods all, create, update are built in - then we map to our custom query defined in the orm object that is imported into this file

// 2. Export all at the end of this file.
//module.exports = ;

var burger = {
    selectAll: function selectAll(cb) {
      // This is like: SELECT * FROM burgers
      console.log('burger.selectAll called');
      orm.selectAll('burgers', function handleSelectAll(res) {
        cb(res);
      });
    },

    // The variables cols and vals are arrays.
    insertOne: function insertOne(cols, vals, cb) {
      console.log('burger.insertOne called');
      orm.insertOne('burgers', cols, vals, function handleInsertOne(res) {
        cb(res);
      });
    },

    updateOne: function(objColVals, condition, cb) {
      console.log('burger.updateOne called');
      orm.updateOne('burgers', objColVals, condition, function handleUpdateOne(res) {
        cb(res);
      });
    },

  }; // end burger
  
  // Export the database functions for the controller (burgers_controller.js).
  module.exports = burger;
  