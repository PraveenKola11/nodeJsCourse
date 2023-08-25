class person {
    constructor(name,age,city){
        this.name =name;
        this.age = age;
        this.city =city;
    }
    getAddress (){
    return `${this.name} is from city ${this.city}`;

    }
} 
const persen1 = new person('praveen',23,'rjy');
const persen2 = new person('sai krishna',22,'kakinaada');

console.log(persen1);// o/p person { name: 'praveen', age: 23, city: 'rjy' }
console.log(persen2);// o/p person { name: 'sai krishna', age: 22, city: 'kakinaada' }
console.log(persen2.getAddress());//o/p sai krishna is from city kakinsada

persen1.pincode='534312';
console.log(persen1);// o/p person { name: 'praveen', age: 23, city: 'rjy', pincode: '534312' }

//delete 
delete persen1.name;
console.log(persen1);

//in javascript every class has constructor it is a default
