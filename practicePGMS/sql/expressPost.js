const express = require('express');
const bodyParser = require('body-parser');
const app = express()
const port = 5099;
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.post('/values',(req,res)=>{
    console.log(req.body.name,req.body.age);
    res.send(`${req.body.name} ${req.body.age}`)
});


app.listen(port, () =>{
   console.log(`server running on port ${port}`);
});