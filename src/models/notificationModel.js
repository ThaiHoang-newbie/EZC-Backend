const mongoose = require('mongoose');

const notificationSchema = new Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    content: String,
    created_at: { type: Date, default: Date.now },
    is_read: { type: Boolean, default: false }
});

const Notification = mongoose.model("Notification", notificationSchema);

module.exports = Notification;