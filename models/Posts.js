// POST MODEL
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema(
    {
        title: { type: String, required: true },
        content: { type: String, required: true },
        date: { type: Date, default: Date.now },
        user: { type: Schema.Types.ObjectId, ref:"User" },
        // upVotes: [{ type: Schema.Types.ObjectId, ref: "Upvote" }], 
    },
    {
        timestamps: true,
    }
);

const Post = mongoose.model('Post', postSchema);

module.exports = Post;