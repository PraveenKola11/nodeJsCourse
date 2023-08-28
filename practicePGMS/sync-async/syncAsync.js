// javascript is asynchronous- execution goes one after another,butit not wait
 const a1 =5;
 const b1 =6;
 let add1 = 0;
 setTimeout(()=>{
    //code is here
console.log('inside');//5
add1 = a1+b1;
 });
 console.log('outside');//1 
 console.log('123456');//2
 setTimeout(()=>{//callback will kept at places whre delay is involved,all callbacks are anonymous functions
add1 =a1+b1;
console.log('inside2');//6
 },0);
 console.log('outside222');//3
 console.log('22222');//4