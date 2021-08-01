// NOTEPAD ROUTER
const router = require('express').Router();
const ctrl = require("../controllers");

router.get('/', isLoggedIn, ctrl.notepad.index);
router.get('/oldest', isLoggedIn, ctrl.notepad.sortOld);
router.post('/', isLoggedIn, ctrl.notepad.create);
router.post('/:id', isLoggedIn, ctrl.notepad.update);
router.delete('/:id', isLoggedIn, ctrl.notepad.delete);

function isLoggedIn (req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('auth/github');
}

module.exports = router;