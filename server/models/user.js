const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
   Fullname : {
    type : String,
    required : true
   },
   Email : {
      type : String,
      required : true
   },
   JobStatus : {
      type : String,
      required : true
   },
   Password : {
      type : String,
      required : true
   }

})

const User = mongoose.model("user",userSchema);
module.exports = User;