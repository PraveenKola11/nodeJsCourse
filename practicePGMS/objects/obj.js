const persen ={
    fname:'praveen',
    lastname:'kola',
    age :23,
    place:'andhra',
language:'telugu',
fullName :function(street){
    return `fullname is ${this.fname} ${this.lastname} from ${street}`
}
}
console.log(persen.fname);//  praveen
console.log(persen.place);// andhra
console.log(persen.fullName('hsr layout'));//o/p  fullname is praveen kola //we can use empty arguments also 
 persen.age = 25; // reassign value
console.log(persen['age']);// we can print like this also
delete persen.place;//delete like this
persen.pincode = 451655;// add into the object like this
console.log(persen.pincode);

//================================
//traversing through array
for (let i in  persen){
    console.log(`key is:${i}`); 
    /** o/p
     key is:fname
key is:lastname
key is:age
key is:language
key is:fullName
key is:pincode
     */
    console.log(`value is ${persen[i]}`);
}
/** o/p 
 * value is praveen
value is kola
value is 25
value is telugu
value is function(street){
    return `fullname is ${this.fname} ${this.lastname} from ${street}`
}
value is 451655
 */
//shallow copy happens for objects,pass by reference
const arr1 =[1,5,47,4,14];
let arr2 = arr1;
console.log(arr2); //[ 1, 5, 47, 4, 14]
arr2.push(9);
console.log(arr1);//[ 1, 5, 47, 4, 14, 9 ]
console.log(arr2);//[ 1, 5, 47, 4, 14, 9 ]

//deep copy happens ,pass by value
const a = 21;
let b = a;

console.log(a);
console.log(b);

b=50;
console.log(a);
console.log(b);