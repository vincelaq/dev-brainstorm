// COMMENT MODEL
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema(
    {
        content: { type: String, required: true },
        date: { type: String, required: true },
        user: { type: Schema.Types.ObjectId, ref: "User" },
        username: String,
        post: { type: Schema.Types.ObjectId, ref: "Post" },
        upvotes: [ String ], 
    },
    {
        timestamps: true,
    }
);

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;