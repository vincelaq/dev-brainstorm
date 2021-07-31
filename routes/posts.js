// POST ROUTER
const router = require('express').Router();
const ctrl = require("../controllers");

router.get('/:id', isLoggedIn, ctrl.posts.index);
router.post('/:id', isLoggedIn, ctrl.posts.create);
router.post('/upvote/:id', isLoggedIn, ctrl.posts.update);
router.post('/upvote/:idPost/:idComment', isLoggedIn, ctrl.posts.updateComment);
router.delete('/:id', isLoggedIn, ctrl.posts.delete);
router.delete('/:idPost/:idComment', isLoggedIn, ctrl.posts.deleteComment);

function isLoggedIn (req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('auth/github');
};

module.exports = router;