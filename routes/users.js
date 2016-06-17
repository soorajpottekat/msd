var express = require('express');
var router = express.Router();
var configuration = require('../config');

function executequery(req,query,callback) {
  var pool = req.app.get('pool');
  pool.getConnection(function(err,connection){
    if (err) {
      connection.release();
      return callback({"code" : 100, "status" : "Error in connection database"});
    }

    console.log('connected as id ' + connection.threadId);

    connection.query(query,function(err,rows){
      connection.release();
      if(!err) {
        console.log(rows);
        return callback(rows);
      }
    });
    connection.on('error', function(err) {
      return callback({"code" : 100, "status" : "Error in connection database"});
    });
  });
}


/* GET users listing. */
router.get('/', function(req, res, next) {
  executequery(req, configuration.SELECT_ALL_USERS,function(users)
  {
    console.log('inside the / '+ users);
    res.json(users);
  });
});
module.exports = router;
