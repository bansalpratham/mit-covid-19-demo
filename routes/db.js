const { Pool } = require('pg')
require("dotenv").config();

const devConfig = {
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    ssl: false
}
const proConfig = {
    connectString: process.env.DATABASE_URL
}

const pool = new Pool(process.env.NODE_ENV === "production"? proConfig: devConfig)
module.exports = pool