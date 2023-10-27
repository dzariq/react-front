const db = require("../models");
const User = db.user;

exports.addUser = (req, res) => {
    console.log(req.body)
    User.create({
        user_id: 333,
        name: 'hh'
    });

    res.json("ADDED SUCCESSFULLY")
};