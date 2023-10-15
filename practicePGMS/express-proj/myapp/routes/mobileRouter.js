var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/mobileDetails', function(req, res, next) {
  const privateKey ='!@#$*545';
  if(req.cookies.loggedIn){
    jwt.verify(req.cookies.loggedIn.token, privateKey,{algorithm: 'RS256'} ,function(err, decoded) {
      console.log(decoded.foo) // bar
      res.render('mobileDetails', { mobileData: {name:'samsung s2', model:2023,processor:req.query.processor} });
    });
    
  }else{
    res.status(401).send('your session time out please login again');
  }

});
router.get('/mobileDetails/:name', function(req, res, next) {
    res.render('mobileDetails', { mobileData: {name:'samsung s2', model:2023,name:req.params.name} });
  });

module.exports = router;
 