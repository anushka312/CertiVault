import mongoose, { Schema } from 'mongoose'


const issueSchema = new Schema({
    requestid: {
        type: String,
        required: true,
    },
    documentlink: { // Link For Document pdf
        type: String,
        required: true,
    },
    studentid: {
        type: String,
        required: true
    },
    adminid: {
        type: String,
        required: true
    },
    documentdata: {
        type: Object,
        required: true
    },
}, {timestamps: true})


export const Issue = mongoose.model('Issue', issueSchema)