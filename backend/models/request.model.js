import mongoose, { Schema } from 'mongoose'


const requestSchema = new Schema({
    studentid: {
        type: String,
        required: true,
    },
    documentid: {
        type: String,
        required: true,
    },
    studentdata: {
        type: Object,
        required: true
    },
    documentdata: {
        type: Object,
        required: true
    },
    note: {
        type: String,
        default: ""
    },
    rejected: {
        type: Boolean,
        default: false
    },
    completed: {
        type: Boolean,
        default: false
    },
    cancel: {
        type: Boolean,
        default: false
    },
    remark: {
        type: String,
        default: ""
    },
    // ! Additional Data For Requesting Document - Not Supporting In Beta
    // data: {
    //     type: Object
    // }
}, {timestamps: true})


export const Request = mongoose.model('Request', requestSchema)