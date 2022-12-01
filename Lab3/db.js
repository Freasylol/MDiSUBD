const Pool = require('pg').Pool
const pool = new Pool({
  user: "postgres",
  password: "6238",
  host: "localhost",
  port: 5432,
  database: "internet_shop_db"
})

module.exports = pool;