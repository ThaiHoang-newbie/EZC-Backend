const mongoose = require('mongoose');

const musicSchema = new mongoose.Schema({
    music_name: String,
    music_author: String,
    music_thumbnail: String,
    created_at: { type: Date, default: Date.now },
    user_id: { type: mongoose.Schema.ObjectId, ref: 'User' },
    download_path: String
})

const Music = mongoose.model("Music", musicSchema);

module.exports = Music;