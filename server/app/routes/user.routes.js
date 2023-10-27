const express = require('express');
const controller = require("../controllers/user.controller");
const router = express.Router();
const db = require("../models");
const User = db.user;

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
                "Access-Control-Allow-Headers",
                "Origin, Content-Type, Accept"
                );
        next();
    });

    router.post("/add", controller.addUser);
    router.get('/users', (req, res) => {
        User.find({}).then(function (FoundItems) {

            res.send(FoundItems);

        })
                .catch(function (err) {
                    console.log(err);
                })

    });

    router.delete('/delete', (req, res) => {
        User.deleteOne({
            user_id: req.query.user_id
        });

        res.json("DELETED SUCCESSFULLY")
    });

    app.use(router);
}