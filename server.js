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

    if(users.find(user => user.name === req.body.name)) {
        if(users.find(user => user.name === req.body.name)) {
            users.forEach(user => {
                if(user.name === req.body.name) {
                    user.latitude = req.body.latitude;
                    user.longitude = req.body.longitude;
                }
            })
            res.send(users);
        } else {
            users.push({username: req.body.username, latitude: req.body.latitude, longitude: req.body.longitude});
            res.send(users);
        }

        res.send("User already exists");
    } else {
        console.log(req.body);
        users.push({username: req.body.username, latitude: req.body.latitude, longitude: req.body.longitude});
        console.log(users);
        res.send(users);
    }

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