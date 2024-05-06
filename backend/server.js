const express = require('express')
const {startDatabase , isConnencted} = require("./db")
const app = express()
const mongoose = require('mongoose');
app.use(express.json())
const cors = require('cors')
app.use(cors())

const postData = require("./routes/postUser")
const getData = require("./routes/getUser")
const getDataId = require("./routes/getUserbyId")


app.get("/" , (req,res)=>{
    res.send(`${isConnencted ? "Connected" : "disconected" } to dataBase`)
})


app.use("/postdata" , postData)
app.use('/getuser',getData)
app.use('/',getDataId)


app.listen(3000 , async()=>{
    try{
        await startDatabase()
        console.log("Server is running Port : 3000")
    }catch (err){
        console.log(err)
    }
})