//scope of variable is functional

//scope of l;et and const are blockwise
const fun = ()=>{
    var a= 23;//functional scope o/p is not defiend
    c=25;// global scope // o/p is 25
}
fun();
console.log(c);
console.log(a);
 
