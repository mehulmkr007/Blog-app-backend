
const mongoose = require("mongoose")

require('dotenv').config()

const dbconnection = ()=>{
        mongoose.connect(process.env.DATABASE_URL,{
            useNewUrlParser : true,
            useUnifiedTopology : true
        })
        .then((result) => {
            console.log("connection of db is SUCCESSFULL")
        }).catch((err) => {
            console.log("connection of db is FAIL")
        });
}

module.exports = dbconnection