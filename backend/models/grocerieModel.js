const mongoose = require('mongoose')

const grocerieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide name of food!']
  },
  place: {
    type: mongoose.Schema.ObjectId,
    ref: 'Storage',
    required: [true, 'Please store your food somewhere']
  },
  bestBefore: {
    type: Date,
    required: [true, 'Please provide a best before date.']
  },
  amount: {
    type: Number,
    required: [true, 'Please add the amount of your item.']
  }
})

const Grocerie = mongoose.model('Grocerie', grocerieSchema)

module.exports = Grocerie