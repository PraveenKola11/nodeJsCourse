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

const getpool = async ()=> {//establish connection is once
        let pool = await sql.connect(sqlConfig);
        return pool;
    }
    sql.on('error',err=>{
              //....error handler
    })
    getpool().then(async(pool)=>{//same connection used again and again
        let result1 = await pool.request()
        .input('id', sql.Int, 2)
        .query('select * from drive where id = @id')
        
    console.dir(result1)

    }).catch((e) =>{
        console.error(e);
    })
    getpool().then(async(pool)=>{//same connection used again and again
        let result1 = await pool.request()
        .input('id', sql.Int, 1)
        .query('select * from drive where id = @id')
        
    console.dir(result1)

    }).catch((e) =>{
        console.error(e);
    })
       
    
      
        
        
   