

  const numbers = [1, 2, 3, 4, 5];
  const squaredNumbers = numbers.map(squareNumber);
 
  function squareNumber(num) {
    return num * num;
    
  }
  console.log(squaredNumbers);

  //=================================
  const arr =[3,8,5,7,9,2];
//  in arrow function only one statement in there , flower brackets and return statement are omited 

       const  result = arr.map((num,index,array)=> num*num);
      console.log(result);
      // if only one argument in function we can avoid () in arrow function like below
      const arr2 = num => num+num;
      console.log(arr2(5));// o/p 5
      