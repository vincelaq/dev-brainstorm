// PASSPORT ROUTER
const router = require('express').Router();
const passport = require('passport');

// LOGIN ROUTE
router.get('/auth/github', passport.authenticate('github'));

// CALLBACK ROUTE
router.get('/auth/github/callback', 
  passport.authenticate('github', { 
        successRedirect: '/dashboard',
        failureRedirect: '/index',
     })
);

// LOGOUT ROUTE
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
})

module.exports = router;