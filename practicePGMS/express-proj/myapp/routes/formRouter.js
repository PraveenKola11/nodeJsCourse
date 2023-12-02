var express = require('express');
var router = express.Router();
//const sql = require('mssql')
/* GET users listing. */
router.get('/getForm', function(req, res, next) {
  res.render('showForm');
});
router.post('/postRegDetails', function(req, res, next) {
    
    res.send(req.body);
  });
module.exports = router;