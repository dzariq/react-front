const db = require("../models");
const User = db.user;

exports.addUser = (req, res) => {
    User.create({
        user_id: Math.floor(Math.random()*90000) + 10000,
        name: req.body.name
    });

    res.json("ADDED SUCCESSFULLY")
};