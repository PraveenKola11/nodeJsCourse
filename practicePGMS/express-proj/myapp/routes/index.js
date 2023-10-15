var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const privateKey ='!@#$*545';
 // const token = jwt.sign({ foo: 'bar' }, privateKey, { algorithm: 'RS256',expiresIn: 10  });
  const cookieValue ={
    userName:'ram',
    role:'software developer',
    token : 'token'
  }
  res.cookie('name',cookieValue,{maxAge: 15000});
  res.render('index', { title: 'Express' });
});

module.exports = router;
