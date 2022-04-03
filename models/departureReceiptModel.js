// first we require mongoose package becoz it will help us define the schema
const mongoose = require('mongoose')

//creating the schema for batteryHireEntry file.
const departureReceiptSchema = mongoose.Schema({
 customersname:{
     type:String,
     required:true
// the data that is coming in, its a string and is required
 },
 phonenumber:{
    type:String,
    required:true
// the data that is coming in, its a string and is required
},
 gender:{
    type:String,
    required:true
// the data that is coming in, its a string and is required
},
 nin:{
    type:String,
    required:true
// the data that is coming in, its a string and is required
},
 departuretime:{
    type:String,
    required:true,
//the data that is coming in, its a number and is required
},
 date:{
   type:String,
   required:true,
//the data that is coming in, its a number and is required
}
})

// we are exposing our schema to other files
const DepartureReceipt = module.exports = mongoose.model('DepartureReceipt', departureReceiptSchema);