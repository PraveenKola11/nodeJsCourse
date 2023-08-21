const str = "hi praveen ";
const strTwo ="hi,how are you";
const strThree = 'hi';
//console.log(str.split(''));
console.log(strTwo.split(','));
//===============================
// chek the given test is string or a number?
const a = 23;
console.log(typeof a);// o/p is number

//convert number to string
const b = a.toString();
console.log(typeof b)// op/ is string
// convet string to number 
const c = parseInt(b);
console.log(typeof c);
//o/p is number
//=============================
const str4 =' i got offer from snapdeel';

console.log(str4.includes('snapdeel'));
//   o/p is true

//indexOf()
console.log(str4.indexOf('o'))//o/p 4
