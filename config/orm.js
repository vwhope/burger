var connection = require('./connection.js');

// create CRUD methods for burgers_db, table: burgers
// export methods as an Object Relational Mapper (ORM)
// FYI ?? swaps table or column names
// ? swaps other values
// 

var orm = {

selectAll:  function(table) {
    var queryString = 'SELECT * FROM ??';
    connection.query(queryString, [table], function (err, res) {
        if (err) throw err;
        console.log(res);
        connection.end();    
    });
},  

// insertOne: function(table, id, burger_name, devoured) {
//     var queryString = 'INSERT INTO ?? SET ??';
//     connection.query(queryString, [table, id, burger_name, devoured], function(err, res) {
//         if (err) throw err;
//         console.log(res.affectedRows + " " + burger_name + ' added.');
//         console.log('insertOne: ' + result);
        
//     });
//     console.log(query.sql);  
// },
// // probably we are updating the devoured field to move burger to right side
// updateOne: function(table, colToUpdate, colToUpdate, valofCol) {
//     var queryString = 'UPDATE ?? SET ?? WHERE ?? = ?';
//     connection.query(queryString, [table, colToUpdate,colToUpdate, valofCol], function(err,res) {
//        if (err) throw err;
//         console.log(res.affectedRows + burger_name + ' updated.');
//         console.log('updateOne: ' + result);
//        });
//     console.log(query.sql);
// }

}; //end ORM object

module.exports = orm; // end exports