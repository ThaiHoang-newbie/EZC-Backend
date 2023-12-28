const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    comment_content: String,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    user_id: { type: mongoose.Schema.ObjectId, ref: 'User' },
    music_id: { type: mongoose.Schema.ObjectId, ref: 'Music' }
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;