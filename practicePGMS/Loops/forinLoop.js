// this loop is used to iterate over the properties of an object
let personobj ={
    name:'praveen',
    age:'23',
    plance:"andhra"

};
for(let key in personobj){
    console.log(key )
}
// o/p is :name,age,place
let personobj2 ={
    name:'praveen',
    age:'23',
    plance:"andhra"

};
for(let key in personobj2){
    console.log(key + " : " +personobj2[key] )
}
/* o/p 
name : praveen
age : 23
plance : andhra
*/