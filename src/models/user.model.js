import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username: {
        type:String,
        required: true,
        trime: true
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required: true
    }
})

export default mongoose.model('User', userSchema)