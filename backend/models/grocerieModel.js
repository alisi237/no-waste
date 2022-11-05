const mongoose = require('mongoose')

const grocerieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide name of food!']
  },
  place: {
    type: String,
    required: [true, 'Please store your food somewhere']
  },
  bestBefore: {
    type: Date
  }
})

const Grocerie = mongoose.model('Grocerie', grocerieSchema)

module.exports = Grocerie