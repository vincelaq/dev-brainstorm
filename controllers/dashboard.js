// DASHBOARD CONTROLLER
const User = require('../models/User');
const Post = require('../models/Post');

module.exports = {
    index,
    create,
}

function create (req, res) {
    req.body.user = req.user.id;
    const date = new Date();
    req.body.date = `${date.getMonth()+1}-${date.getDate()}-${date.getFullYear()}`;
    const post = new Post(req.body);
    post.save((err) => {
        if (err) return res.send(err);
        console.log(post);
    })
    User.findOneAndUpdate({"_id": req.user.id}, { 
        $push: { posts: post.id  }
    }, function (err) {
        if (err) res.send(err);
        res.redirect('/dashboard');
    })
};

function index (req, res) {
    User.findOne({'username': req.user.username})
    .populate('posts')
    .exec((err, userPost) => {
        let post = userPost.posts;
        if (err) res.send(err);
        res.render('dashboard/index', {
            user: req.user,
            post, 
        });
    })  
};