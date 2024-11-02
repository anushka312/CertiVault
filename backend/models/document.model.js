import mongoose, { Schema } from 'mongoose'


const documentSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        unique: true,
        index: true       
    },
    conditions: [String], // Default: Empty Array, Correct Way To Define Array OF String
    // conditions: [{condition: String}], // ! Wrong Methods
    image: {
        type: String,
        default: "none"
    },
    template: { // Link For Document Template
        type: String,
        required: true,
    }
}, {timestamps: true})


export const Document = mongoose.model('Document', documentSchema)