let stocks ={
    fruits:["strawberry",'grapes','apple'],
    liquid:['water','ice'],
    holder:['cone','cup','stick'],
    topping:['chocolate','peanuts'],

};
let shop_is_open = true;
const  topping_choice = () => {
return new Promise((resolve,reject)=>{
setTimeout(()=>{

    resolve(console.log(`which topping would u love?`))
},);
});
};
async function kitchen(){
    console.log(`A`)
    console.log(`B`)
    console.log(`C`)
    await topping_choice();
    console.log(`D`)
    setTimeout(()=>{
        console.log(`E`)
    },2000)
    console.log(`F`)
   
}
const my_choice = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(console.log('its my choice'));
        });
    });
};

kitchen();
my_choice();
console.log('doing the dishes')
console.log('cleaning the tables')
console.log('taking the orders')
///topping_choice();
// o/p
/**
 * 
A
B
C
doing the dishes
cleaning the tables
taking the orders
which topping would  u love?
D
E
 */