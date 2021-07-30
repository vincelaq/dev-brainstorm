// PROFILES ROUTER
const router = require('express').Router();
const ctrl = require("../controllers");

router.get('/:id', isLoggedIn, ctrl.profiles.index);
router.post('/:id', isLoggedIn, ctrl.profiles.update);

function isLoggedIn (req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('auth/github');
};

module.exports = router;