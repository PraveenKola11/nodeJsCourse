const arr =[2,5,6,8,21,9,8];
const output = arr.reduce(function(acc,curr){
    acc =acc +curr;
    return acc;
},0);
console.log(output);
// o/p 59
