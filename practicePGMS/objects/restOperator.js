// rest operator is also denoted by ... dots
//rest operator catches all the arguments as an array
const funcOne = (...args) =>{
    console.log(args);// o/p [ 1, 2, 3, 4, 5, 6 ]
    //return args;//  o/p [ 1, 2, 3, 4, 5, 6 ]
   // return args.sort((a,b) => b-a)[0];// 6
    return args.sort((a,b) => b-a);//[ 6, 5, 4, 3, 2, 1 ]
}
console.log(funcOne(1,2,3,4,5,6,));
//rest operator is used as function parameter to catch the arguments as an array