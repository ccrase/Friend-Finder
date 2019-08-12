//require package
const express = require('express');
//include path pack to get the correct file path for our html
const path = require('path');

//start server instance
const app = express();

//set port
var PORT = process.env.PORT || 8080;

//sets up the express server to handle data parsing in the middlewear 
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//points the server to a series of "route" files. These routes give the server a map of how to respond when users visit/request data from various URLs. 
require("./app/routes/htmlRoutes")(app);
//require("./app/routes/apiRoutes")(app);

app.listen(PORT, function(){
    console.log('App listening on port: ' + PORT);
})