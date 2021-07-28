// POST CONTROLLER
const User = require('../models/User');
const Post = require('../models/Post');
const Comment = require('../models/Comment');

module.exports = {
    index,
    create,
}

function create (req, res) {
    req.body.user = req.user.id;
    req.body.username = req.user.username;
    const date = new Date();
    req.body.date = `${date.getMonth()+1}-${date.getDate()}-${date.getFullYear()}`;
    req.body.post = req.params.id;
    const comment = new Comment(req.body);
    comment.save((err) => {
        if (err) return res.send(err);
        console.log(comment);
    });
    User.findOneAndUpdate({"_id": req.user.id}, { 
        $push: { comments: comment.id  }
    }, function (err) {
        if (err) res.send(err);
    });
    Post.findOneAndUpdate({'_id': req.params.id}, { 
        $push: { comments: comment.id  }
    }, function (err) {
        if (err) res.send(err);
    });
    res.redirect(`${req.params.id}`);
};

function index (req, res) {
    Post.findOne({'_id': req.params.id})
    .populate('comments')
    .exec((err, post) => {
        let currentPost = post;
        console.log(post);
        if (err) res.send(err);
        res.render('posts/index', {
            user: req.user,
            currentPost, 
        });
    })  
};