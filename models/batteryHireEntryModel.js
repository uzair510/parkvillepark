// first we require mongoose package becoz it will help us define the schema
const mongoose = require('mongoose')

//creating the schema for batteryHireEntry file.
const batteryHireEntrySchema = mongoose.Schema({
 batterysize:{
     type:String,
     required:true
// the data that is coming in, its a string and is required
 },
 batteryprice:{
    type:Number,
    required:true,
//the data that is coming in, its a number and is required
}
})

// we are exposing our schema to other files
const BatteryHireEntry = module.exports = mongoose.model('BatteryHireEntry', batteryHireEntrySchema);