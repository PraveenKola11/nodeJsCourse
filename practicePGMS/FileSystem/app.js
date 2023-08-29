//console.log("hello world")
/*let a=10
  let b = 20
let c = a+b
console.log("the answer is " + c)
*/
/* const http = require('http')
http.createServer(function(req,res){
    res.write("welcome to nodeJS")
    res.end()

}).listen(3000)*/
  let calc = require('./calc.js')
  
 result = calc.add(5,10)

console.log("the answer is " +result)                                                