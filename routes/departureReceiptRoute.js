const express = require('express');
const router = express.Router();
const passport = require('passport')
const expressValidator = require('express-validator')
router.use(expressValidator())

//requiring the model/schema of carTyreClinic
const DepartureReceipt = require('../models/departureReceiptModel')

//accessing the departureReceipt page
router.get('/',(req, res)=>{
// we are rendering the login_2 pug file
    res.render('departureReceipt')
});

router.post('/',(req,res)=>{
    //declaration of variables that correspond to the names in the form.
        const customersname = req.body.customersname
        const phonenumber = req.body.phonenumber
        const gender = req.body.gender
        const nin = req.body.nin
        const departuretime = req.body.departuretime
        const date = req.body.date
        
    //we are handling errors here
        const errors = req.validationErrors()
        if(errors){
        res.render('departureReceipt')
        }
        else {
    //we have a new variable assigning it 
            let newDepartureReceipt = new DepartureReceipt({
    //value(property name from register schema):property(variable name)
                customersname:customersname,
                phonenumber:phonenumber,
                gender:gender,
                nin:nin,
                departuretime:departuretime,
                date:date
            });
    //saving our model to
        newDepartureReceipt.save((err) => {
             if(err){
                 console.error(err);
             return;
             }
             else {
    //we first flash a message confirm the saving of a record
    //we stay @ the same form to register a new entity
                console.log('we have saved your data in the database')
                res.redirect('/departureReceipt')
             }
           })
        }
        })

//we exposing our route to any file that will require it.
module.exports = router