//first we require mongoose package becoz it will help us define the schema
const mongoose = require('mongoose')

//creating the schema for batteryHireEntry file.
const revenueEntrySchema = mongoose.Schema({
 cartyresectionrevenue:{
     type:Number,
     required:true
//the data that is coming in, its a string and is required
 },
 batterysectionrevenue:{
   type:Number,
   required:true,
//the data that is coming in, its a number and is required
},
 parkingsectionrevenue:{
  type:Number,
  required:true,
//the data that is coming in, its a number and is required
},
 totalrevenue:{
  type:Number,
  required:true,
//the data that is coming in, its a number and is required
}
})

//we are exposing our schema to other files
const RevenueEntry = module.exports = mongoose.model('RevenueEntry', revenueEntrySchema);