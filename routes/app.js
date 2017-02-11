var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function (req, res, next) {
    User.findOne({}, function (err, user) {
        if (err) {
            return res.send('Error!');
        }
        res.render('node', {email: user.email});
    });
});

router.post('/', function (req, res, next) {
    var email = req.body.email;
    var user = new User({
        firstName: 'Matteo',
        lastName: 'Merzi',
        password: '123456',
        email: email
    });
    user.save();
    res.redirect('/');
});

module.exports = router;
