//Load Express Library
var express = require("express");

//Create an instance of the express application
var app = express();

//Configure the routes
//Check and match request
app.use("index.html", function (req, res) {
    res.status(200);
    res.type("text/html");
    res.send("<h1>hello</h1>");
});

app.use(express.static(__dirname + "/public"));
app.use("/images", express.static(__dirname + "/pictures")); 
//note that this means that as long as the pciture file is tagged with /images in front in html, it will go into /pictures file to get it;
//in other words, /images is like a tag/resource rather than an actual file

//app.use(express.static(__dirname + "/images"));




//Create my server
//Specify the port that the app will be listening to
var port = 3000;

//Bind the app to the port
app.listen(port, function () {
    console.log("Application started on port %d", port);
});