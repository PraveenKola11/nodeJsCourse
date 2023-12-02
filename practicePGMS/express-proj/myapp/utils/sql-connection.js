const sql = require('mssql')
const sqlConfig = {
  user:'sa' ,
  password:'sa' ,
  database:'forms' ,
  server: 'LAPTOP-UOSOJ9AR',
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true // change to true for local dev / self-signed certs
  }
}

const connection =  async () => {
 try {
  // make sure that any items are correctly URL encoded in the connection string
  const pool = await sql.connect(sqlConfig)
    return Promise.resolve(pool)
  } catch (err) {
    return Promise.reject(err)
  // ... error checks
 }
}
 
exports.connection = connection;