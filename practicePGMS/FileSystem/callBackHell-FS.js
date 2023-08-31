
const fs = require('fs');
fs.readFile('./sample1.txt','utf8',(err,data)=>{
    if (err){
        console.error(err);
        return;
    }
    console.log(data);
    const dataToBeAppended =' i am doing fantastic';
    fs.appendFile('sample1.txt',dataToBeAppended,(errA)=>{
        if (errA){
            console.error(errA);
            return;
        }
        fs.readFile('./sample1.txt','utf8',(errR,dataR)=>{
            if(errR){
                console.error(err);
                return;

              
            }
            console.log(dataR);
        })
    })
})
//o/p
// hello praveen welcome to filesystem ,callback hell i am doing fantasticlcome to filesystem ,callback hell
// hello praveen we