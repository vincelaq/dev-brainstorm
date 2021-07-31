//TIMELINE CONTROLLER
const Post = require('../models/Post');

module.exports = {
    index,
};

function index (req, res) {
    Post.find({})
    .populate('comments', 'user')
    .exec((err, post) => {
        console.log(post);
        if (err) res.send(err);
        res.render('timeline/index', {
            post,
            user: req.user,
        });
    })
};