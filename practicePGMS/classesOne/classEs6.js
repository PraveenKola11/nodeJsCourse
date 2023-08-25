// in Es6 defining constructor is not mandatory
class person{
    name = 'ram';
    city = 21;
    getAddress(){
        return `${this.name} is from city ${city}`;
    }
}
const per1 = new person();
console.log(per1);
