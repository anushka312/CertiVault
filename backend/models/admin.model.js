import mongoose, { Schema } from 'mongoose'


const adminSchema = new Schema({
    fullname: {
        type: String,
        required: true,
        trim: true,
    },
    adminid: {
        type: String,
        required: true,
        unique: true,
        index: true       
    },
    password: {
        type: String,
        required: true,
    },
    issuecount: {
        type: Number,
        default: 0
    }
}, {timestamps: true})

export const Admin = mongoose.model('Admin', adminSchema)