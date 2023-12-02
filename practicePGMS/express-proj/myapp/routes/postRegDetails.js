var express = require('express')
var router = express.Router()
const sql = require('mssql')
const conn = require('../utils/sql-connection')

router.get('/openForm', function(req, res, next) {
    res.render('showForm')
});

router.post('/postRegDetails', function(req, res, next) {
    const postedData = req.body 
    console.log(postedData)


    try{
        conn.connection().then(async  (pool)=>
        {
            const table = "Table2" ;
            const request = await pool.request()
            request.input('Name',sql.VarChar(50),postedData.Name)
            request.input('Email',sql.VarChar(50),postedData.Email)
            request.input('Place',sql.VarChar(50),postedData.Place)
            request.input('Role',sql.VarChar(50),postedData.Role)
            request.input('MobileNum',sql.BigInt(50),postedData.MobileNum)
            const ss = await pool.request().query(`select * from ${table}`)

            const insertData = await request.query(`insert into ${table} (Name,Email,Place,Role,MobileNum) values(@Name,@Email,@Place,@Role,@MobileNum)`)
            console.log(insertData)
            const result = await request.query(`select * from ${table}`)
            console.log(result);
            res.render('showData',{data:result.recordset}) ;

             })
    }catch(err){ 
        console.log(err)

    }
});

    module.exports = router;