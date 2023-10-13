var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/mobileDetails', function(req, res, next) {
  res.render('mobileDetails', { mobileData: {name:'samsung s2', model:2023,processor:req.query.processor} });
});
router.get('/mobileDetails/:name', function(req, res, next) {
    res.render('mobileDetails', { mobileData: {name:'samsung s2', model:2023,name:req.params.name} });
  });

module.exports = router;
 