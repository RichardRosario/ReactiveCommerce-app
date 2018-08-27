const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    unique: 1
  },
  password: {
    type: String,
    require: true,
    minlength: 5
  },
  name: {
    type: String,
    require: true,
    maxlength: 30
  },
  lastname: {
    type: String,
    require: true,
    maxlength: 30
  },
  cart: {
    type: Array,
    default: []
  },
  history: {
    type: Array,
    default: []
  },
  role: {
    type: Number,
    default: 0
  },
  token: {
    type: String
  }
})

const User = mongoose.model('User', userSchema);

module.exports = { User };