const db = require("../models");
const User = db.user;

exports.addUser = (req, res) => {
    User.create({
        user_id: 333,
        name: req.body.name
    });

    res.json("ADDED SUCCESSFULLY")
};