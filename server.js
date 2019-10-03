const express = require('express');

const app = express();

// use process.env variables to keep private variables,
// be sure to ignore the .env file in github
require('dotenv').config()

// Express Middleware
const helmet = require('helmet') // creates headers that protect from attacks (security)
const bodyParser = require('body-parser') // turns response into usable format
const cors = require('cors')  // allows/disallows cross-site communication
const morgan = require('morgan') // logs requests

// db Connection w/ Heroku
// const db = require('knex')({
//   client: 'pg',
//   connection: {
//     connectionString: process.env.DATABASE_URL,
//     ssl: true,
//   }
// });

// db Connection w/ localhost
var db = require('knex')({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : '',
    password : '',
    database : 'crud-starter-api'
  }
});

// Controllers - aka, the db queries
const main = require('./insta_app/controllers/main')


// App Middleware
const whitelist = ['http://localhost:3001']
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(helmet())
app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(morgan('combined')) // use 'tiny' or 'combined'


// App Routes - Auth
app.get('/', (req, res) => {
  res.send(req.header('user-agent'));
})

app.post('/contract', (req, res) => {
  res.send(req.body)
})

// app.get('/crud', (req, res) => main.getTableData(req, res, db))
// app.post('/crud', (req, res) => main.postTableData(req, res, db))
// app.put('/crud', (req, res) => main.putTableData(req, res, db))
// app.delete('/crud', (req, res) => main.deleteTableData(req, res, db))

// App Server Connection
app.listen(process.env.PORT || 5050, () => {
  console.log(`app is running on port ${process.env.PORT || 5050}`)
})


// const app = express();

// app.get('/api/customers', (req, res) => {
//     const customers = [
//         {id: 1, fistName: "Peter", lastName: "Pettygrew"},
//         {id: 2, fistName: "Alvrus", lastName: "Dumbledore"},
//         {id: 3, fistName: "Professor", lastName: "Snape"}
//     ];

//     res.json(customers)
// });


// const port = 5050;

// app.listen(port, () => { console.log(`Started on port ${port}`)})