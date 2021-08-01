// NOTEPAD MODEL
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notepadSchema = new Schema(
    {
        title: { type: String, required: true },
        content: { type: String, required: true },
        date: { type: String, required: true },
        user: String,
        username: String,
    },
    {
        timestamps: true,
    }
);

const Notepad = mongoose.model('Notepad', notepadSchema);

module.exports = Notepad;