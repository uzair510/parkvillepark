const express = require('express');
const router = express.Router();
const passport = require('passport')
const expressValidator = require('express-validator')
router.use(expressValidator())

// requiring the model/schema of batteryHireEntry
const BatteryHireEntry = require('../models/batteryHireEntryModel')

//accessing the batteryHireEntry page
router.get('/',(req, res)=>{
//we are rendering the batteryHireEntry pug file
    res.render('batteryHireEntry')
});

router.post('/batteryHireEntry',(req,res)=>{
//declaration of variables that correspond to the names in the form.
    const batterysize = req.body.batterysize
    const price = req.body.price
    
//we are handling errors here
    const errors = req.validationErrors()
    if(errors){
    res.render('batteryHireEntry')
    }
    else {
//we have a new variable assigning it 
        let newBatteryHireEntry = new BatteryHireEntry({
//value(property name from register schema):property(variable name)
            batterysize:batterysize,
            price:price,
        });
//saving our model to
    newBatteryHireEntry.save((err) => {
         if(err){
             console.error(err);
         return;
         }
         else {
//we first flash a message confirm the saving of a record
//we stay @ the same form to register a new entity
            req.flash('success', 'You have successfully signed up')
            console.log('we have saved your data in the database')
            res.redirect('/home')
         }
       })
    }
    })

//we exposing our route to any file that will require it.
module.exports = router