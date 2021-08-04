//PROFILES CONTROLLER
const User = require('../models/User');

module.exports = {
    index,
    update,
    show,
};

// SHOW A SELECTED USER'S PROFILE
function show (req, res) {
    User.findOne({'username': req.params.showId}, (err, one) => {
        console.log(one);
        if(err) res.send(err);
        res.render('profiles/show', {
            user: req.user,
            one
        })
    })
};

// UPDATE USER'S PROFILE
function update (req, res) {
    User.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        username: req.body.username,
        avatar: req.body.avatar,
        email: req.body.email,
        bio: req.body.bio,
        techSkills: req.body.techSkills,
    }, function (err, user) {
        if(err) res.send(err);
        res.redirect('back');
    })
};

// RENDER USER PROFILE
function index (req, res) {
    res.render('profiles/index', {
        user: req.user,
    })
};