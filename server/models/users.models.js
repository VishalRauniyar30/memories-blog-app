import { Schema, model } from "mongoose"

const userSchema = Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }, 
    id : {
        type : String
    }
})


const User = model('User', userSchema)

export default User
