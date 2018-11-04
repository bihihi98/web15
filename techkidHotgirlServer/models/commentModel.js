const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    user: { type: String },
    content: { type: String, required: true }
});

const CommentModel = mongoose.model("Image", CommentSchema);

module.exports = CommentModel;