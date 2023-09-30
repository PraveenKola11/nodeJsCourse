const express = require('express')
const app = express()
const port = 3089;
app.get('/', function (req, res) {
    console.log('welcome express server')
  res.send('Hello World')
})
app.get('/showMobileDetails', function (req, res) {
 const redmi ={
    model :'note 4',
    releaseDate:2017,
    price :12000

 }
  res.send(redmi);
})
app.get('/amIAuthorized', function (req, res) {
  res.status(401);     
  res.send('not authorized')
})
app.get('/whether', function (req, res) {
     //user hit the url
     // code and logic that will executed and return the data back to the user/customer 
   
  })
  

app.listen(port, () =>{
   console.log(`server running on port ${port}`);
});