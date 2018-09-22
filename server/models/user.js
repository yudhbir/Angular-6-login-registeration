var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
   first_name: String,
   last_name: String,
   email: String,
   password: String
});
var User = mongoose.model("User", userSchema,'users');//1=model name,3param is collection name
module.exports = User;