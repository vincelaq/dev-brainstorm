// POST CONTROLLER
const User = require('../models/User');
const Post = require('../models/Post');
const Comment = require('../models/Comment');

module.exports = {
    index,
    create,
    delete: deletePost,
    deleteComment,
    update,
    updateComment,
}
function updateComment (req, res) {
    Comment.findOne({ "_id": req.params.idComment})
        .then((comment) => {
            console.log(comment);
            let upvoteArr = comment.upvotes;
            if (upvoteArr.includes(req.user.username)) {
                Comment.updateOne({ _id: req.params.idComment}, {
                    $pull: { upvotes: req.user.username}
                })
                .then(() => console.log('decerement by -1'))
                .catch((err) => console.log(err))
            } else {
                Comment.updateOne({ _id: req.params.idComment}, {
                    $push: { upvotes: req.user.username}
                })
                .then(() => console.log('increment by 1'))
                .catch((err) => console.log(err))
            }
            res.redirect('back');
        })
};

function update (req, res) {
    Post.findOne({ "_id": req.params.id})
        .then((post) => {
            console.log(post);
            let upvoteArr = post.upvotes;
            if (upvoteArr.includes(req.user.username)) {
                Post.updateOne({ _id: req.params.id}, {
                    $pull: { upvotes: req.user.username}
                })
                .then(() => console.log('decerement by -1'))
                .catch((err) => console.log(err))
            } else {
                Post.updateOne({ _id: req.params.id}, {
                    $push: { upvotes: req.user.username}
                })
                .then(() => console.log('increment by 1'))
                .catch((err) => console.log(err))
            }
            res.redirect('back');
        })
};

function deleteComment (req, res) {
    Comment.findByIdAndDelete(req.params.idComment)
    .then((err) => {
        if (err) console.log(err);
        res.redirect(`back`);
    })
};

function deletePost (req, res) {
   
    Post.findByIdAndDelete(req.params.id)
    .then((err) => {
        if (err) console.log(err);
    })
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
        if (err) res.send(err);
        res.render('posts/index', {
            user: req.user,
            currentPost, 
        });
    })  
};