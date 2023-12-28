const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, "Username is required field!"],
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: [true, "Password is required field!"]
    },
    email: {
        type: String,
        required: [true, "Email is required field!"],
        unique: true,
        lowercase: true
    },
    refresh_token: {
        type: String
    },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    role_id: { type: Schema.Types.ObjectId, ref: 'Role' },
});

const User = mongoose.model("User", userSchema);

export default User;