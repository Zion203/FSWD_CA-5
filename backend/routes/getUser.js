const express = require("express")
const router = express.Router()
const User = require("../sechma")
const mongoose = require('mongoose');


router.get('/' , async (req,res)=>{
    try{
        
        const user = await User.find()
        res.json(user)
    } catch (err) {
        console.log(err)
        res.send(err)
    }
})

module.exports = router

