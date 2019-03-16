var path = require("path");

module.exports = function(app) {
  
  var tables = require("./data");  
  //console.log(tables); ----> Moved from server.js

  // All Routes Go Here
  // Basic route that sends the user first to the AJAX Page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
    // res.sendFile((__dirname + "view.html"));   --- tested this and it works so far
  });

  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });

  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });

  // Displays all reservations
  app.get("/api/data", function(req, res) {
    return res.json(tables);
  });

  // Create New Table - takes in JSON input
  app.post("/api/table", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newReservation = req.body;

    //console.log("req.body = ", req.body);

    // Using a RegEx Pattern to remove spaces from newReservation
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
   // newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();

    console.log(newReservation);

    tables.push(newReservation);

    res.json(newReservation);
  });
};
