// COMMENT MODEL
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema(
    {
        content: { type: String, required: true },
        date: { type: Date, default: Date.now },
        user: { type: Schema.Types.ObjectId, ref:"User" },
        // upVotes: [{ type: Schema.Types.ObjectId, ref: "Upvote" }], 
    },
    {
        timestamps: true,
    }
);

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;