const mongoose = require('mongoose')

const storageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide name of storage!']
  }
})

const Storage = mongoose.model('Storage', storageSchema)

module.exports = Storage