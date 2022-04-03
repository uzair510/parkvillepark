// first we require mongoose package becoz it will help us define the schema
const mongoose = require('mongoose')

//creating the schema for batteryHireEntry file.
const vehicleEntrySchema = mongoose.Schema({
 category:{
     type:String,
     required:true
// the data that is coming in, its a string and is required
 },
 category2:{
   type:String,
   required:true,
//the data that is coming in, its a number and is required
},
 nin:{
  type:String,
  required:true,
//the data that is coming in, its a number and is required
},
 driversname:{
  type:String,
  required:true,
//the data that is coming in, its a number and is required
},
phonenumber:{
 type:String,
 required:true,
//the data that is coming in, its a number and is required
},
numberplate:{
 type:String,
 required:true,
//the data that is coming in, its a number and is required
},
color:{
 type:String,
 required:true,
//the data that is coming in, its a number and is required
},
arrivaltime:{
 type:String,
 required:true,
//the data that is coming in, its a number and is required
},
date:{
 type:String,
 required:true,
//the data that is coming in, its a number and is required
},
model:{
 type:String,
 required:true,
//the data that is coming in, its a number and is required
},
charge:{
 type:Number,
 required:true,
//the data that is coming in, its a number and is required
}
})

// we are exposing our schema to other files
const VehicleEntry = module.exports = mongoose.model('VehicleEntry', vehicleEntrySchema);