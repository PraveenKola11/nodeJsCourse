function one (abcd){
    console.log('step 1 complete. please call step2');
abcd();//here calling dunction two with parameters
}
function two(){
    console.log('step 2');
}
one(two); //here sending function two as a argument
