const express = require('express');
const router = express.Router();
const passport = require('passport')
const expressValidator = require('express-validator')
router.use(expressValidator())

//accessing the index page
router.get('/',(req, res)=>{
// we are rendering the index pug file
    res.render('login')
});

//defining the route for processing the data from the login form
router.post('/', passport.authenticate('local', {failureRedirect: '/login'}),
        (req, res, next) => {
        console.log(req.body);
        req.session.user = req.user;
        //this is the route for the page after successfully logging in
        res.redirect('/login')
        //incase of failure remain on login
        
        //also display a flash message showing what's wrong in case of failure
        failureFlash: true

        //'next' allows thenext process to be executed
       
});
//we exposing our route to any file that will require it.
module.exports = router