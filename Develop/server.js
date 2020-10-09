// Dependencies
const express = require("express");

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({extended:true})) 
app.use(express.json())
app.use(express.static("public"))

// Creating routes between each page
var apiroutes = require("./router/apiroutes")
var htmlroutes = require("./router/htmlroutes")

app.use(apiroutes)
app.use(htmlroutes)

// This is making the app listen to the server
app.listen(PORT, function(){
    console.log("App listening on PORT" + PORT)
})


