const { request } = require('express')
const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
})

module.exports = model('User', UserSchema)
