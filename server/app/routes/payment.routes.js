const express = require('express');
const controller = require("../controllers/payment.controller");
const router = express.Router();
const db = require("../models");
const Payment = db.payment;

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
                "Access-Control-Allow-Headers",
                "Origin, Content-Type, Accept"
                );
        next();
    });
    router.post("/payment/add", controller.addPayment);

    router.get('/payment/:order_id', (req, res) => {
        Payment.find({order_id : req.params.order_id}).then(function (FoundItems) {
            console.log(FoundItems)

            res.send(FoundItems);

        })
                .catch(function (err) {
                    console.log(err);
                })

    });

    app.use(router);
}