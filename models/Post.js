// POST MODEL
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema(
    {
        title: { type: String, required: true },
        content: { type: String, required: true },
        date: { type: String, required: true },
        user: { type: Schema.Types.ObjectId, ref:"User" },
        comments: [{ type: Schema.Types.ObjectId, ref:"Comment" }],
        // upVotes: [{ type: Schema.Types.ObjectId, ref: "Upvote" }], 
    },
    {
        timestamps: true,
    }
);

const Post = mongoose.model('Post', postSchema);

module.exports = Post;