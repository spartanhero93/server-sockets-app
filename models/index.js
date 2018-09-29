const mongoose = require('mongoose')
const { Schema } = mongoose
const FactorySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  numberOfChildren: {
    type: Number,
    required: true
  },
  upperBound: {
    type: Number,
    required: true
  },
  lowerBound: {
    type: Number,
    required: true
  },
  children: {
    type: Array,
    required: true
  }
})
const FactoryModel = mongoose.model('factory', FactorySchema)
module.exports = FactoryModel