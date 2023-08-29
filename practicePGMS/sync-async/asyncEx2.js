function one (abcd){
    abcd();
    console.log('step 1 complete. please call step2');

}
function two(){
    console.log('step 2');
}
one(two); //here sending function two as a argument
/** o/p step 2
step 1 complete. please call step2 */