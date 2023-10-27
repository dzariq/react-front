const express = require('express');
const controller = require("../controllers/user.controller");
const router = express.Router();

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
                "Access-Control-Allow-Headers",
                "Origin, Content-Type, Accept"
                );
        next();
    });

    router.post("/add", controller.addUser);
    
    app.use(router);


}