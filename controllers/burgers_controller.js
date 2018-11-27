var express = require('express');
var burger = require('../models/burger.js');
// below is now using 'Router-level middleware' (as opposed to application-level middleware)
// see this for more info: https://expressjs.com/en/guide/using-middleware.html
// router-level middleware is bound to an instance of express.Router() - otherwise works like application-level middleware
// to test your route - you can use Express Route Tester: http://forbeslindesay.github.io/express-route-tester/

var router = express.Router();

// initial to just test that all is working
// router.get("/", function(req,res) {
//     res.render('index', {
//         headline: 'Eat-Da-Burger!',
//         directions: 'Enter a burger you want to eat. Then click 'Submit' button.'          
//     });
// });


// create route for displaying all burgers
 router.get('/', function(req,res) {
    // console.log('get index.html');
     burger.selectAll(function(data) {
        
         var hbsObject = {
           burgers: data,
         };
         //display all the data from table 'burgers' on index.handlebars page
         res.render('index', hbsObject);
     });
 });    

// create route for inserting new burger into burgers table
 router.post('/api/burgers', function(req,res) {
     // console.log('post info: ' + req.body.burger);
     burger.insertOne(['burger', 'devoured'], [req.body.burger, req.body.devoured], function(result) {
          
       // send back the ID of the newly added burger 
          res.json({id: result.insertId});
     });
 });

// // create route for updating an existing burger in table burgers
router.put('/api/burgers/:id', function(req, res) {
    var condition = 'id = ' + req.params.id;

    burger.updateOne(
        {
            devoured: req.body.devoured
        },
        condition,
        function(result) {
            if (result.changedRows === 0) {
                return res.status(404).end();
        }
        res.status(200).end();
    }
  );
});
    
// export routes for server.js 
module.exports = router;