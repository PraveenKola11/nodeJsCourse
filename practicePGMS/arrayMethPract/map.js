const arr =[2,5,6,8,9,3];
const res = arr.map(function(num,){
    return num *2;
})
console.log(res);

const arr1 =[5,5,82,5,2,8,9,];//[  10, 10, 164, 10,   4, 16,  18 ]    
const res1 = arr1.map((res1)=> res1 *2);

console.log(res1);

// old function
const arr3 =[5,5,82,5,2,8,9,];
 function triple(tri){
    return tri *3;
// 
 }
 const res2 = arr3.map(triple);
 console.log(res2);/** o/p 15, 15, 246, 15,
 6, 24,  27 */

//  binary 
const arr4 = [1,2,4,5,6,7,8];
 function binary(x){
    return x.toString(2)
 }
 const output = arr4.map(binary);
 console.log(output);/** o/p [
  '1',    '10',
  '100',  '101',
  '110',  '111',
  '1000'
] */

// below code is es6 function
const arr5 = [1,2,4,5,6,7,8];
    let binary1 =(xy)=> xy.toString(2);
 const output2 = arr5.map(binary1);
 console.log(output2);

 // ANOTHER WAY TO WRITE
 const arr6 = [1,2,4,5,6,7,8];
 const binary3 = arr6.map((z)=>z.toString(3));// if want put z*toString the o/p is given 'NaN'
 console.log(binary3);/** o/p [
    '1',  '2',  '11',
    '12', '20', '21',
    '22'
  ] */


