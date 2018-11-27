var connection = require('../config/connection.js');

// create CRUD methods for burgers_db, table: burgers
// export methods as an Object Relational Mapper (ORM)
// FYI ?? swaps table or column names
// ? swaps other values
// 
// Helper function for SQL syntax.
// Let's say we want to pass 3 values into the mySQL query.
// In order to write the query, we need 3 question marks.
// The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";
function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }
  
  // Helper function to convert object key/value pairs to SQL syntax
  function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
  }
  
var orm = {

selectAll:  function(table, callback ) {
    var queryString = 'SELECT * FROM ??';
    connection.query(queryString, [table], function (err, res) {
        if (err) throw err;
        callback(res);
            
    });
 },  

insertOne: function(table, cols, vals, callback) {
     var queryString = 'INSERT INTO ' + table;
     queryString += " (";
     queryString += cols.toString();
     queryString += ") ";
     queryString += "VALUES (";
     queryString += printQuestionMarks(vals.length);
     queryString += ") ";
 
     console.log(queryString);
     
     // INSERT INTO burgers(burger) VALUES('burger name from user input (data)');
     connection.query(queryString, vals, function(err, result) {

        if (err) throw err;
        // console.log(result.affectedRows + " " + burger + ' added.');
         console.log('insertOne: ' + result);
         callback(result);
     });
 },

// update the devoured field from false to true to move burger to right side of screen
// objColVals should be {burger: new burger name, devoured: true}
updateOne: function(table, objColVals, condition, callback) {
    var queryString = 'UPDATE ' + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log("Update: " + queryString);

    connection.query(queryString, function(err,result) {
       if (err) throw err;
        console.log(result.affectedRows + burger + ' updated.');
        console.log('updateOne: ' + result); 
        callback(result);
       });
    }

}; //end ORM object

module.exports = orm; // end exports