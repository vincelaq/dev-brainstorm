//TIMELINE CONTROLLER
const Post = require('../models/Post');

module.exports = {
    index,
    sortOld
};

// SORT POSTS BY OLDEST
function sortOld (req, res) {
    Post.find({})
    .populate('comments', 'user')
    .sort(({createdAt: 1}))
    .exec((err, post) => {
        console.log(post);
        if (err) res.send(err);
        res.render('timeline/index', {
            post,
            user: req.user,
        });
    })
};

// RENDER ALL POSTS IN DATABASE
function index (req, res) {
    Post.find({})
    .populate('comments', 'user')
    .sort(({createdAt: -1}))
    .exec((err, post) => {
        console.log(post);
        if (err) res.send(err);
        res.render('timeline/index', {
            post,
            user: req.user,
        });
    })
};