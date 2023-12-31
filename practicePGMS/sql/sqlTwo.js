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

const connectFun = async () => {
 try {
  // make sure that any items are correctly URL encoded in the connection string
  await sql.connect(sqlConfig)
  const result = await sql.query`select * from dbo.drive where id = ${2}`
  console.dir(result)
 } catch (err) {
  // ... error checks
  console.log(err);
 }
}
connectFun();