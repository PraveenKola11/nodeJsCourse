// filter even number
const arr1 =[7,5,8,6,2,14];

const even = (x) => x %2 ===0;
const op = arr1.filter(even);
console.log(op);// o/p [7,5,8,6,2,14];