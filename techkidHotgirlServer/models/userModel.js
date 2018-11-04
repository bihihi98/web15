const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    avatar: { type: String },
    intro: { type: String },
    posts: [{ type: String }]
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;