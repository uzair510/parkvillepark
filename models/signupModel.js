// first we require mongoose package becoz it will help us define the schema
const mongoose = require('mongoose')

//creating the schema for batteryHireEntry file.
const signupSchema = mongoose.Schema({
  username:{
    type:String,
    required:true,
    unique:true
  //the data that is coming in, its a number and is required
  },
  nin:{
    type:String,
    required:true,
  //the data that is coming in, its a number and is required
  },
   email:{
    type:String,
    required:true,
  //the data that is coming in, its a number and is required
  },
   password:{
    type:String,
    required:true,
  //the data that is coming in, its a number and is required
  },
   gender:{
   type:String,
   required:true,
//the data that is coming in, its a number and is required
},
 
})

// we are exposing our schema to other files
const Signup = module.exports = mongoose.model('Signup', signupSchema);