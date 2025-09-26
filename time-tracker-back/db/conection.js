const {Pool} = require('pg');

require('dotenv').config();

const pool = new Pool({
    host: process.env.DB_HOST,
    port : process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD, 
})

pool.connect((err, client, release) => {
    if(err){
        console.log(pool)
       return console.error('Error al conectar DB');
    }
    client.query('SELECT * FROM USERS', (error, res)=>{
        console.log(res.rows);

    client.query("SELECT * FROM information_schema.tables WHERE table_schema = 'public'", (err, res)=>{
        console.log(res.rows)
    })
    })
    console.log('conected');
    release();
});