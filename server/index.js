const express = require("express");
const mongo = require("mongodb").MongoClient;
const multer = require("multer");
const path = require("path");
const cors = require("cors");


const port = 3200;

const app = express();
app.use(express.static(path.join(__dirname,'/../client/build')));
app.use(cors())

var pass = encodeURIComponent("Mirz@851205");
var CONN = "mongodb+srv://dzariq:" + pass + "@cluster0.4yossos.mongodb.net/?retryWrites=true&w=majority";
var DB = 'badanamu';
var database;
let db = null;

app.get('/users', (req, res) => {
    database.collection("user").find({}).toArray((error, result) => {
        res.send(result)
    });
});

app.post('/add', multer().none(), (req, res) => {
    database.collection("user").count({}, function (error, numDocs) {
        database.collection("user").insertOne({
            user_id: (numDocs + 1).toString(),
            name: req.body.name
        });

        res.json("ADDED SUCCESSFULLY")
    });
});

app.delete('/delete',(req, res) => {
    database.collection("user").deleteOne({
        user_id: req.query.user_id
    });

    res.json("DELETED SUCCESSFULLY")
});

app.listen(port, () => {
    console.log('HIIII this is server!!')
    mongo.connect(CONN, (error, client) => {
        if (error) {
            throw error;
        }
        database = client.db(DB);
        console.log('CONNECTED')

    })
});