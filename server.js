const express = require('express');
const bodyParser= require('body-parser')
const app = express();

app.use(bodyParser.json())
const port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log("Server running on port: " + port);
})


var users = [];

app.get("/users", function(req, res) {
    console.log(users);
    res.send(users);
})

app.post("/adduserwithlocation", function(req, res) {
    console.log(req.body);
    users.push({username: req.body.username, latitude: req.body.latitude, longitude: req.body.longitude});
    console.log(users);
    res.send(users);
})

app.put("/updateuserwithlocation", function(req, res) {
    for (let i = 0; index < users.length; i++) {
        if(users[i].username == req.body.username) {
            users[i].latitude = req.body.latitude;
            users[i].longitude = req.body.longitude;
        }
    }
    console.log(users);
    res.send(users);
}
)