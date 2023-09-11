

const proFun =()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(a===2){
            resolve('resolved');
            }else{
                reject('rejected');
            }
        },1000)
    })
}
const funOne = async ()=>{
    prvemm;
    try{
  const res  = await proFun(2);
  console.log(res);
    }catch(e){
        console.log('in catch block');
    }
}
//all async functions by default acts as Promises
funOne().then((res2)=>{console.log(res2)}).catch((e)=>{console.log('in last catch block')})