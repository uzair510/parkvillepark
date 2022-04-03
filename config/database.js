//We are creating a file that will tell the controller where to find the database.
//We shall be exporting our database to the server file that will help establish the 
//database connection.

module.exports = {
//Here we are establishing a portnumber to our database.
//This is a connection string and a path to the database.
        database:'mongodb://localhost:27017/parkville-parking',
//The secret is our password.
        secret:'balenziphillip'
    }
    
    