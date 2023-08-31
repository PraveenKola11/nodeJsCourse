const fs = require('fs');

fs.access('./sample.txt','a+',(err,data)=>{
    if (err){
        console.error(err);
        return;
    }
    console.log(data);
})