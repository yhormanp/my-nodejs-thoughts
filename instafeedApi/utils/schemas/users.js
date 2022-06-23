/* eslint-disable no-undef */
const mongoose = require('mongoose');

const { Schema } = mongoose;

const UsersSchema = new Schema({
  email: String,
  role: String,
  hash: String,
  salt: String,
});

const Users = mongoose.model('Users', UsersSchema);

module.exports = { Users };
