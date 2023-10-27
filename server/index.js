const express = require("express");
const router = express.Router();
const mongo = require("mongodb").MongoClient;
const multer = require("multer");
const path = require("path");
const cors = require("cors");
var bodyParser = require('body-parser')
const port = 3200;

const app = express();

//app.use(express.static(path.join(__dirname,'/../client/build')));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
require('./app/routes/user.routes')(app);

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


