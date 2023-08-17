// string,integer,boolean,undefiend
//strings are denoted single are double qouets-'',"", 
const personName = 'praveen';
console.log(typeof personName); //type of is used to find out the data type of any variable.
const age = 23;
console.log(typeof age);
//============================

//===,this also an equivalent operator but it also compares the typeof the variables as well 
const ageOfSuri =25;
const ageOfTeja ='25';
console.log(ageOfSuri == ageOfTeja);
console.log(ageOfSuri === ageOfTeja);
console.log(ageOfSuri !== ageOfTeja);
//increment and decrement operators
let marks = 35;
console.log('first inc :',marks++);//Post Increment
console.log('second inc :',++marks);//preIncrement
console.log('first inc :',marks--);
console.log('first inc :',--marks);