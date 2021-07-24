// USER MODEL
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        name: { type: String },
        username: { type: String, required: true },
        email: { type: String },
        githubId : String,
        bio: String,
        techSkills: String,
        posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
        comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
        repos: [{ type: Schema.Types.ObjectId, ref: "Repo"}] 
    }
);

const User = mongoose.model('User', userSchema);

module.exports = User;