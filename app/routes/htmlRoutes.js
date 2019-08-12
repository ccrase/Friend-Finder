//include path pack to get the correct file path for our html
const path = require('path');

module.exports = function(app){
    //HTML get requests
    //This code handles when a user visits a page.
    //In all cases, the user is shown an HTML content page. 
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
      });
    
      app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
      });
    
      // If no matching route is found default to home
      app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
      });
};