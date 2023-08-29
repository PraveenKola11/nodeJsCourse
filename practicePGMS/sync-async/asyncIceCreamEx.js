/**
 * order from customer
 * fetch ingredients
 * start production
 * serve
 */
let stocks ={
    fruits:["strawberry",'grapes','apple'],
    liquid:['water','ice'],
    holder:['cone','cup','stick'],
    topping:['chocolate','peanuts'],

};
//console.log(stocks.liquid[1]);
let order =(fruit_name,call_production)=>{
    setTimeout(()=>{
        console.log(`${stocks.fruits [fruit_name]}`);
        call_production();
    },2000);
    
}
let production = ()=>{
    setTimeout(()=>{
        console.log('production is started');
        setTimeout(()=>{
            console.log('the fruits has been chopped');
            setTimeout(()=>{
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
               setTimeout(()=>{
                console.log('the machine has started');
                  setTimeout(()=>{
                     console.log(` ice cream was placed on ${stocks.holder[0]} `);
                     setTimeout(()=>{
                        console.log(`${stocks.topping[0]} was added as topping`);
                        setTimeout(()=>{
                            console.log('ice cream is served');
                        },2000)
                    
                    },3000);
                  },2000)
               },1000);
            },1000);
        },2000);
    }, 1000);
};
order(1,production)
