// REPO MODEL
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const repoSchema = new Schema(
    {
        title: { type: String, required: true },
        content: { type: String, required: true },
        user: { type: String, required: true },
        githubId: { type: String, required: true}
        // upVotes: [{ type: Schema.Types.ObjectId, ref: "Upvote" }], 
    },
    {
        timestamps: true,
    }
);

const Repo = mongoose.model('Repo', repoSchema);

module.exports = Repo;