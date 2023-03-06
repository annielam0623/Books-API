//Require mongoose
const mongoose = require('mongoose')

//Create shorthand for the Schema constructor
const { Schema } = mongoose

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, },
    year: { type: Number },
    quantity: { type: Number,  required: true },
    imageURL: { type: String },
})

module.exports  = mongoose.model('Book', bookSchema)
