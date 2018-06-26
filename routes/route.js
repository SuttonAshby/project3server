const express = require('express');
const passport = require('passport');
const User = require('../models/user');

module.exports = function(app) {
    app.get("/auth/check", (req, res) => {
        if (req.user) {
            res.json({ user: req.user });
        }
    })
};