    const sql = require('mssql');
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

const getPool = async ()=> {//establish connection is once
        let pool = await sql.connect(sqlConfig);
        return pool;
    }
    sql.on('error',err=>{
        //....error handler
})
exports.getPool = getPool;