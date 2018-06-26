const express = require('express');
const passport = require('passport');
const User = require('../models/user');

module.exports = function(app) {
    app.get("/auth/check", (req, res) => {
        if (req.user) {
            res.json({ user: req.user });
        } else {
            res.json(false);
        };
    });

    app.post("/auth/login", passport.authentication('local'), (req, res) => {
        res.json(true);
    });

    app.post("/auth/register", (req, res) => {
        User.register(new User({
            username: req.body.username
        }), req.body.password, (err, user) => {
            if(err) {
                console.log(err);
                return;
            }
            passport.authenticate("local")(req, res, () => {
                res.json(true);
            });
        });
    });

    app.get("/auth/logout", (req, res) => {
        req.logout();
        res.json(true);
    });

};