const db = require("../models");
const Payment = db.payment;
const formcode = '930154140675769';
const secretKey = '152-798';
const crypto = require('crypto');

exports.addPayment = (req, res) => {
    const detail = detail;
    const hmac = crypto.createHmac('sha256', secretKey);
    hmac.update(secretKey + detail + req.body.amount + req.body.order_id);
    const hash = hmac.digest('hex');
    const url = 'https://sandbox.senangpay.my';

    console.log('HMAC-SHA256 Hash:', hash);

    Payment.create({
        order_id: req.body.order_id,
        email: req.body.email,
        phone: req.body.phone,
        detail: detail,
        name: req.body.name,
        amount: req.body.amount,
        hash: hash,
        url: url,
        formcode: formcode
    });

    res.json(
            {
                url: 'https://plankton-app-g6t2l.ondigitalocean.app/payment?order_id=' + req.body.order_id
            });
};