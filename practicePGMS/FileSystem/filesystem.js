let fs = require('fs')
//fs.readFile('filesystem1.js','utf8',function(err,data){
 //   console.log(data)
// })
//================================================
//fs.writeFile('filesystem1','console.log("done")',function(err){
  //  console.log("data is saved")
//})
fs.appendFile('filesystem1','console.log("done")',function(err){
    console.log("data is saved")
})
fs.appendFile('filesystem1','console.log("done")',function(err){
    console.log("data is saved")
})
/*fs.unlink('filesystem1',function(err){
    console.log("file is delated")
})*/