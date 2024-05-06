const express = require("express")
const router = express.Router()
const User = require("../sechma")
// console.log(User)
const mongoose = require('mongoose');


router.post('/' , async (req,res)=>{
    try{
        // console.log(req)


        const {name , Gender , id} = req.body;
        const user = await User.findOne({id})

        if(user){
            return res.status(401).json({message : 'user already id found'})
        }

        console.log(req.body)
        const newUser = await User.create({name , Gender , id})
        // await newUser.save()
        res.send("Done!!")
    } catch (err) {
        console.log(err)
        res.send(err)
    }
})

module.exports = router

