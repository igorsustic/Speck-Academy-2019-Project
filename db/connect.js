const { Pool, Client } = require('pg')

const pool = new Pool({
  user: 'igorsu',
  host: '138.68.87.73',
  database: 'db_igorsu',
  password: '>?DhD7cE',
  port: 5432,
})

pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
})

const client = new Client({
  user: 'igorsu',
  host: '138.68.87.73',
  database: 'db_igorsu',
  password: '>?DhD7cE',
  port: 5432,
})
client.connect()

client.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  client.end()
})