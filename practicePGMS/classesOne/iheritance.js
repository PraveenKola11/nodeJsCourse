class father{
    constructor(name,age,city){
        this.name=name;
        this.age=age;
        this.city=city;

    }

getAddress(){
    return `${this.name} from city ${this.city}`;
}
}
class boy extends father{
    constructor(name,age,city){
        super(name,age,city);
    }
    getFatherAddress(){
        return ` ${this.name} is from city ${this.city}`;
    }
} 
    class girl extends father{
        constructor(name,age,city){
            super(city);
            this.name=name;
            this.age=age;
            this.city ='rajamundry';// these changes will be reflected in the parent class ass well.
        }
        getFatherAddress(){
            return ` ${this.name} is from city ${this.city}`;
        }
}
const childOne = new boy ('praveen',23,'hyd');
console.log(childOne);//   { name: 'praveen', age: 23, city: 'hyd' }
console.log(childOne.getFatherAddress());// o/p  praveen is from city hyd
// below console acccess parent class 
console.log(childOne.getAddress());//praveen from city hyd


const childGirl = new girl('jahnavi',24,'hyd');
console.log(childGirl.getAddress());//o/p jahnavi from city rajamundry
console.log(childGirl);// o/p girl { name: 'jahnavi', age: 24, city: 'rajamundry' }  