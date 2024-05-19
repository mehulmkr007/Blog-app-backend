const express = require("express")
const app = express()

// env config 
require('dotenv').config()

PORT = process.env.PORT || 3000


// middlerware  -->use for parsing the data (to connect post requiest )
app.use(express.json())


// routes 
const blog = require('./routes/blog')


// mount 
app.use('/api/v1' , blog)

// database connection
const dbconnection = require('./config/databaseConnect')
dbconnection()

// default server started
app.listen(PORT , ()=>{
    console.log('server for blog')
})

app.get('/', (req,res)=>{
    res.send('<h1>server started for blog website</h1>')
})

