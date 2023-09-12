async function order(){
    try{
        await Abc;
    }
    catch(error){
console.log('iam error block,abc dosent exts')
    }
    finally{
console.log('runs code anyway')
    }
}
order().then(()=>{

console.log('its then block')
});
order().then(()=>{
    console.log('its second than block')
})
