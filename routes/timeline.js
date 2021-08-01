//TIMELINE ROUTER

const router = require('express').Router();
const ctrl = require("../controllers");

router.get('/', isLoggedIn, ctrl.timeline.index);
router.get('/oldest', isLoggedIn, ctrl.timeline.sortOld);


function isLoggedIn (req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('auth/github');
};

module.exports = router;