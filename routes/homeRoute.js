const express = require('express');
const router = express.Router();

//accessing the home page
router.get('/',(req, res)=>{
// we are rendering the home pug file
    res.render('home')
});
router.post('/',(req,res)=>{
    res.render('home')
});
//we exposing our route to any file that will require it.
module.exports = router