// POST ROUTER
const router = require('express').Router();
const ctrl = require("../controllers");

router.get('/:id', isLoggedIn, ctrl.posts.index);
router.post('/:id', isLoggedIn, ctrl.posts.create);

function isLoggedIn (req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('auth/github');
};

module.exports = router;