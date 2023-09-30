const sql = require('mssql')
const sqlConfig = {
    user:'sa',
    password: 'sa',
   
    server: 'LAPTOP-UOSOJ9AR',
    database:'driver',
    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis:20000,
    },
    options: {
      
      encrypt: true, // for azure
      trustServerCertificate: true // change to true for local dev / self-signed certs
    }
  }

const fun =async function () {
    try {
        let pool = await sql.connect(sqlConfig)
        let result1 = await pool.request()
            .input('id', sql.Int, 1)
            .query('select * from drive where id = @id')
            
        console.dir(result1)
    
        // Stored procedure
        
        let result2 = await pool.request()
            .input('input_parameter', sql.Int, value)
            .output('output_parameter', sql.VarChar(50))
            .execute('procedure_name')
        
        console.dir(result2)
    } catch (err) {
        // ... error checks
    }
}

sql.on('error', err => {
    // ... error handler
})
fun();