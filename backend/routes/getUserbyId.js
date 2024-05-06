const express = require("express")
const router = express.Router()
const User = require("../sechma")
const mongoose = require('mongoose');


router.get('/getuser/:id' , async (req,res)=>{

    let {id} = req.params
    // console.log(id)
    const len = id.length
    id = id.slice(1,len)
    // console.log(id)
    try{
        
        const user = await User.findOne({id})
        console.log(user)
        res.json(user)
    } catch (err) {
        console.log(err)
        res.send(err)
    }
})

module.exports = router

