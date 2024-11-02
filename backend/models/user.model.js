import mongoose, { Schema } from 'mongoose'


const userSchema = new Schema({
    fullname: {
        type: String,
        required: true,
        trim: true
    },
    studentid: {
        type: String,
        required: true,
        unique: true,
        index: true       
    },
    password: {
        type: String,
        required: true
    },
    batch: {
        type: String,
        required: true
    },
    branch: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        trim: true
    }
}, {timestamps: true})

export const User = mongoose.model('User', userSchema)