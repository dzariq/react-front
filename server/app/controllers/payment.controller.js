const db = require("../models");
const Payment = db.payment;
const formcode = '189161409304044';
const secretKey = '26655-596';
const crypto = require('crypto');

exports.addPayment = (req, res) => {
    const hmac = crypto.createHmac('sha256', secretKey);
    hmac.update(secretKey + req.body.detail + req.body.amount + req.body.order_id);
    const hash = hmac.digest('hex');

    console.log('HMAC-SHA256 Hash:', hash);

    Payment.create({
        order_id: req.body.order_id,
        email: req.body.email,
        phone: req.body.phone,
        detail: 'test',
        name: req.body.name,
        amount: req.body.amount,
        hash: hash,
        formcode: formcode
    });

    res.json(
            {
                url: 'https://plankton-app-g6t2l.ondigitalocean.app/payment?order_id=' + req.body.order_id
            });
};