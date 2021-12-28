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

    //add user with username, latitude, longitude. If user already exists, update latitude and longitude
    var user = req.body;
    var userExists = false;
    for (var i = 0; i < users.length; i++) {
        if (users[i].username == user.username) {
            users[i].latitude = user.latitude;
            users[i].longitude = user.longitude;
            userExists = true;
        }
    }
    if (!userExists) {
        users.push(user);
    }
    res.send(users);

})

app.put("/updateuserwithlocation", function(req, res) {
    if(users.find(user => user.name === req.body.name)) {
        users.forEach(user => {
            if(user.name === req.body.name) {
                user.latitude = req.body.latitude;  
                user.longitude = req.body.longitude;
            }
        })
        res.send(users);
    } else {
        res.send("User does not exist");
    }
    console.log(users);
    res.send(users);
}
)