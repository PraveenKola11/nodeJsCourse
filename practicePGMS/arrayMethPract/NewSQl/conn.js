const sql = require('mssql')
const sqlConfig = {
  user: 'sa',
  password: 'sa',
  database:'driver',
  server: 'LAPTOP-UOSOJ9AR',
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: true, // for azure
    trustServerCertificate: false // change to true for local dev / self-signed certs
  }
}

const getPool = async () => {
 try {
  // make sure that any items are correctly URL encoded in the connection string
  let pool = await sql.connect(sqlConfig);
  return pool;
  const result = await sql.query`select * from dbo.drive where id = ${2}`
  console.dir(result)
  console.log('database')
 } catch (err) {
  // ... error checks

  console.log('connection error')
 }
}
getPool();