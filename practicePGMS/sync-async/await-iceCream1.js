let stocks ={
    fruits:["strawberry",'grapes','apple'],
    liquid:['water','ice'],
    holder:['cone','cup','stick'],
    topping:['chocolate','peanuts'],

};
let shop_is_open = true;
function time(ms){
    return new Promise((resolve,reject)=>{
        if(shop_is_open){
            setTimeout(resolve,ms)
        }
        else{
           reject( console.log('shop is closed'))
        }

    })
}

async function kitchen(){
    try{
        await time(2000)
        console.log(`${stocks.fruits[0]} selected`);
        await time(1000)
        console.log('start the production');

        await time(2000)
        console.log('cut the fruit');

        await time(3000)
        console.log(`${stocks.liquid[0]},and ${stocks.liquid[1]} are added`)

        await time(1000)
        console.log('start the machine');

        await time(2000)
        console.log(`${stocks.holder[0]} is my choice`);

        await time(3000)
        console.log(` ${stocks.topping[0]} added on topping`);

        await time(2000)
        console.log('finally our favurate ice cream ready')

    }
    catch(error){
        console.log('customer left')
       
    }
    finally{
        console.log('shop is closed')

    }
}
kitchen();
/**
 * strawberry selected
start the production
cut the fruit
water,and ice are added
start the machine
cone is my choice
 peanuts added on topping
finally our favurate ice cream ready
shop is closed
 */