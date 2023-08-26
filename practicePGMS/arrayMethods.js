//arrays are one of the data structures in JS. to store more than one value we go to data structures
//he
const nameArray =['saurav','sumanth','srikanth',35,85.46,true,false];
console.log(nameArray);
console.log(nameArray.length)
console.log(nameArray[5]);

nameArray.push('rakesh');
console.log(nameArray);
//pop will delete the last element of the arrayf   
nameArray.pop();
console.log(nameArray);

//given task====================
//write a program to add the element at the beginig of the array
//write a program on every method of the array



//Array.join()
const arrayName = ['ayyappa','praveen','praneeth','sumanth',true,false,35,85,'jagadeesh']
arrayName.join('*')// we want write this type also
console.log(arrayName)
console.log(arrayName.join('-'));
//======================================================================================= 
//concat

const id = ['ayyappa','praveen','praneeth','sumanth',true,false,35,85,'jagadeesh']
console.log(arrayName.concat('arif'));
//=======================================================================================
//unshift()

const persn = ['ayyappa','praveen','praneeth','sumanth',true,false,35,85,'jagadeesh']
console.log(arrayName.concat('arif'));

persn.unshift('surendra');
console.log(persn);
//shift()
const remove = ['ayyappa','praveen','praneeth','sumanth',true,false,35,85,'jagadeesh']
//remove.shift();
console.log(remove.shift());


//============================================
//slice()
const sli = ['ayyappa','praveen','praneeth','sumanth',true,false,35,85,'jagadeesh']


console.log(sli.slice(3));
//splice()
const spl = ['ayyappa','praveen','praneeth','sumanth',true,false,35,85,'jagadeesh']
spl.splice(1,3,'ramesh','raghu')
console.log(spl);


//toString()
const bikes =['yamaha','splender','royal enfield','apachi'];
console.log(bikes.toString());
//===============================================
//sort();
const bike =['yamaha','splender','royal enfield','apachi'];
console.log(bike.sort());
//reverse()
const rvr =['yamaha','splender','royal enfield','apachi','passion','Activa'];
console.log(rvr.reverse());
