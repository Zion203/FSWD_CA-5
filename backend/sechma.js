const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    name : {
        type : String,
    },
    Gender : {
        type : String
    },
    id : {
        type : String
    }
})



const User = mongoose.model("CA_Users" , UserSchema)
// console.log(User)
module.exports = User