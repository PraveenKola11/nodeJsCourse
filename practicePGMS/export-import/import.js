const impData = require('./export');
const impStr =require('./exports2');
const obj = require('./exportObj');
console.log(impData.add(2,3));//5
console.log(impData.add(5,3));//8
console.log(impData.add(26,3));//29
console.log(impData.add(2,38));//40
console.log(impData.add(2,43)); //45
console.log(impData.sub(12,56));// -44
console.log(impData.sub(182,43));//o/p 139
console.log(impData.sub(10,6));//4

console.log(impStr.strConcat('hello',' praveen'));// o/p hello praveen

console.log(obj.add(6,6));//12
console.log(obj.div(75,6));//12.5
console.log(obj.mul(9,45));//405

