//it will filter the array based on the condition
const arr = [4,5,87,14,8,6];
  const  result = arr.filter((num,index,array) => num <50 ) ;

   console.log(result);// o/p 4,5,14,8,6,
   //=======================================
   const arr1 = [4,5,87,14,8,6];
  const  result1 = arr1.filter((num) =>
  {
    return num <50 
}) 

   console.log(result);