const express = require('express');
const router = express.Router();
const passport = require('passport');
const expressValidator = require('express-validator');
router.use(expressValidator());

// requiring our model or schema of register
const RevenueEntry = require('../models/revenueEntryModel')

//accessing the mgtEntry page
router.get('/',(req, res)=>{
// we are rendering the register2 pug file
    res.render('revenueEntry')
});

// we are creating the route for the post method
router.post('/revenueEntry',(req,res)=>{
// declaration of variables that correspond to the
// names in the form.
const cartyresectionrevenue = req.body.cartyresectionrevenue
const batterysectionrevenue = req.body.batterysectionrevenue
const parkingsectionrevenue = req.body.parkingsectionrevenue
const totalrevenue = req.body.totalrevenue


// we are handling errors here
const errors = req.validationErrors()
if(errors){
res.render('revenueEntry')
}
else {
// we have a new variable assigning it 
    let newRevenueEntry = new RevenueEntry({
// value(property name from register schema):property(variable name)
        cartyresectionrevenue:cartyresectionrevenue,
        batterysectionrevenue:batterysectionrevenue,
        parkingsectionrevenue:parkingsectionrevenue,
        totalrevenue:totalrevenue
    });
// saving our model to
   newRevenueEntry.save((err) => {
     if(err){
         console.error(err);
     return;
     }
     else {
        //we fisrt flash a message confirm the saving of a record
        //we stay @ the same form to register a new entity
        console.log('we have saved your data in the database')
        res.redirect('/home')
     }
   })
}
})

//we exposing our route to any file that will require it.
module.exports = router