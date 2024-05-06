const mongoose = require("mongoose")
require("dotenv").config()


const startDatabase = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Database Connected")
    }catch (err){
        console.log("Error Connecting" , err);
    }
}


const isConnencted = () =>{
    return mongoose.connection.readyState === 1
}

module.exports = {startDatabase , isConnencted}