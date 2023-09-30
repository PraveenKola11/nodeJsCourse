const sql = require('mssql');
const pool = require('./export.js');
pool.getPool().then(async(pool)=>{//same connection used again and again
    let result1 = await pool.request()
    .input('id', sql.Int, 2)
    .query('select * from drive where id = @id')
    
console.dir(result1)

}).catch((e) =>{
    console.error(e);
})
pool.getPool().then(async(pool)=>{//same connection used again and again
    let result1 = await pool.request()
    //.input('id', sql.Int, 2)
    .input('id', sql.Int, 3)
    .input('name',sql.VarChar,'jadhav')
    .input('carname',sql.VarChar,'merceds')
   // .query('select * from drive where id = @id')
   .query('insert into drive Values(@id,@name,@carname)')
    //.query('select * from drive where id = @id')
console.dir(result1)

}).catch((e) =>{
    console.error(e);
})
   

  
pool.getPool().then(async(pool)=>{//same connection used again and again
    let result1 = await pool.request()
    .input('id', sql.Int, 3)
    
   // .query('select * from drive where id = @id')
   //.query('insert into drive Values(@id,@name,@carname)')
    .query('select * from drive where id = @id')
console.dir(result1)

}).catch((e) =>{
    console.error(e);
})
   

pool.getPool().then(async(pool)=>{//same connection used again and again
    let result1 = await pool.request()
    .input('id','name','carname',sql.Int,sql.VarChar,'2','pream','kia')
    .query('Update drive SET id=@id name=@name carname=@carname where id=2')
 
console.dir(result1)

}).catch((e) =>{
    console.error(e);
})
   

  
    