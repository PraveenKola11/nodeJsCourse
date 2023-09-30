const sql = require('mssql')

const connectFun = async () => {
    try {
        // make sure that any items are correctly URL encoded in the connection string
        await sql.connect('Server=LAPTOP-UOSOJ9AR,;Database=driver;User Id= sa;Password=sa;Encrypt=true')
        const result = await sql.query`select * from dbo.drive where id = ${1}`
        console.dir(result)
    } catch (err) {
        // ... error checks
    }
}
connectFun();