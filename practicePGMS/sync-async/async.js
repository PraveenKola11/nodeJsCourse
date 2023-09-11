const fun =(j)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('resoved');
        
        },1000)

    })
}
//const profun2 =(a)=>{
    //setTimeout(()=>{
     //   return 'resolved';
   // },1000)
///} ========>its not promises



//fun().then((res)=>{
   // console.log(res);
   // console.log('all done');
//})
//await can be used only inside async function
//await can be used only with promises.

const funTwo = async ()=>{
    const resA = await fun();
    console.log(resA);
    console.log('all done in await');
}
funTwo();
//o/p
//resoved
//all done in await