// first we require mongoose package becoz it will help us define the schema
const mongoose = require('mongoose')

//creating the schema for batteryHireEntry file.
const carTyreClinicSchema = mongoose.Schema({
 category:{
     type:String,
     required:true
// the data that is coming in, its a string and is required
 },
 tyresize:{
    type:String,
    required:true
// the data that is coming in, its a string and is required
},
 tyremake:{
    type:String,
    required:true
// the data that is coming in, its a string and is required
},
 carmodel:{
    type:String,
    required:true
// the data that is coming in, its a string and is required
},
 charge:{
    type:Number,
    required:true,
//the data that is coming in, its a number and is required
}
})

// we are exposing our schema to other files
const CarTyreClinic = module.exports = mongoose.model('CarTyreClinic', carTyreClinicSchema);