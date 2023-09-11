let stocks ={
    fruits:["strawberry",'grapes','apple'],
    liquid:['water','ice'],
    holder:['cone','cup','stick'],
    topping:['chocolate','peanuts'],

};
let shopopen = true;
let order = (time,work)=>{
    return new Promise((resolve,reject)=>{
        if(shopopen){
           // resolve(work())
           setTimeout(()=>{
            resolve(work());
           },time);
        }
        else{
            reject(console.log('our shop is opend'))
        }

    })
}
order(2000,()=>console.log(`${stocks.fruits[1]} was selected`))
 .then(()=>{

    return order(1000,()=>console.log('production has started'))
 })

 .then(()=>{
    return order(1000,()=>console.log('the fruit was chopped'))

 })

 .then(()=>{
    return order(1000,()=>{
        console.log(`${stocks.liquid[0]}and ${stocks.liquid[1]} selected`)
    })
    
 })
 .then(()=>{
    return order(1000,()=>console.log('start the machine'))
 })

 .then(()=>{
    return order(2000,()=>{
        console.log(` ic cream is placed on ${stocks.holder[0]}`)
    })
 })
 .then(()=>{
    return order(3000,()=>{
        console.log(`${stocks.topping[0]} was added`)
    })
})
.then(()=>{
    return order(1000,()=>console.log("ice cream was served "))
})

 


