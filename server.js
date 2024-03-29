const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const database = {
    users :[
        {
            id:'123',
            name:'John',
            email:'john@gmail.com',
            password:'cookies',
            entries:0,
            joined:new Date()
        },
        {
            id:'124',
            name:'Sally',
            email:'sally@gmail.com',
            password:'bananas',
            entries:0,
            joined:new Date()
        }
    ]
}

app.get("/",(req,res) => {
    res.send(database.users);
})

app.post("/signin",(req,res) => {
    if(req.body.email === database.users[0].email && req.body.password === database.users[0].password){
        res.json(database.users[0]);
    } else {
        res.status(400).json("error logging in");
    }
})

app.post("/register",(req,res) => {
    const { name,email,password } = req.body;
    database.users.push({
        id:'125',
        name:name,
        email:email,
        // password:password,
        entries:0,
        joined:new Date()
    })
    res.json(database.users[database.users.length-1]);
})

app.get("/profile/:id",(req,res) => {
    const { id } = req.params;
    let found=false;
    database.users.forEach(user => {
        if(user.id === id){
            found=true;
            return res.json(user);
        } 
    })
    if(!found) {
        res.status(400).json('no user found');
    }
})

app.put("/image", (req,res) => {
    const { id } = req.body;
    let found=false;
    database.users.forEach(user => {
        if(user.id === id){
            found=true;
            user.entries++;
            return res.json(user.entries);
        } 
    })
    if(!found) {
        res.status(400).json('no user found');
    }
})

// // Load hash from your password DB.

app.listen(3000, () => {
    console.log("App is running on port 3000");
})

// "test": "echo \"Error: no test specified\" && exit 1"
 // bcrypt.compare("apples", "$2a$10$wAsWKE5D2Q2let6MZzeh8uHGfIGo/jcBj1MjvpwQ0Tj8uhELE7Btu", function(err, res) {
    //     console.log('first guess',res);
    // });
    // bcrypt.compare("veggies", '$2a$10$wAsWKE5D2Q2let6MZzeh8uHGfIGo/jcBj1MjvpwQ0Tj8uhELE7Btu', function(err, res) {
    //     console.log("second guess",res);
    // });
