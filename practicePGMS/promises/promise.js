//wew use promises as an alternative for callbacks,to avoid callback hell
// *****create a server,async-await,callbacks
//resolve will be called in sccess scenarios
// reject will be called in failure scenarios
//at time only one can be called,either resolve or reject

const fs =require('fs');
const funRead = ()=>{
    return new promise((resolve,reject)=>{
        fs.readFile('sample1.txt','utf8',(err,data)=>{
            if(err){
                console.error(err);
                reject(err);
            }
            resolve(data);

        })
    })
}
funRead().then((result)=>{
    console.log('i am in then block');
    console.log(result);
    //append to the file
    return new promise((resolve,reject)=>{
        fs.appendFile('sample1.txt','Ganbalore',(err)=>{
            if(err){
                reject(err);

            }
            console.log('in second block');
            return resolve('append succesful');

        })
    })
}).then((msgAppend)=>{
    console.log(msgAppend);
    //read again from, the file 
    fs.readFile('sample1.txt','utf8',(err,dataR)=>{
        if(err){
            console.error(err);
            throw err;
        }
            console.log('in 3rd block');
            console.log(dataR);
        
    })
}).catch((err)=>{
    console.error('i am in catch block');
    console.error(err);
})