const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    user: { type: String },
    view: { type: Number, default: 0 },
    like: { type: Number, default: 0 },
    url: { type: String, required: true },
    caption: { type: String },
    title: { type: String, required: true },
    comments: [{ type: String }],
    },
    {
        timestamps: true
    });

const ImageModel = mongoose.model("Image", ImageSchema);

module.exports = ImageModel;