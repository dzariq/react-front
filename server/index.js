const express = require("express");
const router = express.Router();
const mongo = require("mongodb").MongoClient;
const multer = require("multer");
const path = require("path");
const cors = require("cors");
var bodyParser = require('body-parser')
const port = 3200;

const app = express();
require('./app/routes/user.routes')(app);

//app.use(express.static(path.join(__dirname,'/../client/build')));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var pass = encodeURIComponent("Mirz@851205");
var CONN = "mongodb+srv://dzariq:" + pass + "@cluster0.4yossos.mongodb.net/?retryWrites=true&w=majority";
var DB = 'badanamu';

const db = require("./app/models");
const Role = db.role;
const User = db.user;

db.mongoose
        .connect(CONN, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => {
            console.log("Successfully connect to MongoDB.");
//    initial();
        })
        .catch(err => {
            console.error("Connection error", err);
            process.exit();
        });

app.listen(port, () => {
    console.log('HIIII this is server!!')

});

app.get('/users', (req, res) => {
    User.find({}).then(function (FoundItems) {

        res.send(FoundItems);

    })
            .catch(function (err) {
                console.log(err);
            })

});

app.delete('/delete', (req, res) => {
    User.deleteOne({
        user_id: req.query.user_id
    });

    res.json("DELETED SUCCESSFULLY")
});

