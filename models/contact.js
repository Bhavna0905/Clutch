const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.Mongo_url);

const userSchema = new mongoose.Schema({ 
      name: String,
      email: String,
      username: String,
});

module.exports = mongoose.model("user", userSchema);