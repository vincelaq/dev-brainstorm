// DASHBOARD ROUTER
const router = require('express').Router();
const ctrl = require("../controllers");

router.get('/dashboard', isLoggedIn, ctrl.dashboard.index);

function isLoggedIn (req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('auth/github');
}

module.exports = router;