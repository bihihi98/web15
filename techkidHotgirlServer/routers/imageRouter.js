const express = require('express');
const ImageRouter = express.Router();
const ImageModel = require('../models/imageModel');
const UserModel = require('./models/userModel');

ImageRouter.use((req, res, next) => {
    console.log("User middleware");
    next();
});

ImageRouter.get("/:id", (req, res) => {
    let imageId = req.params.id;
    ImageModel.findById(imageId, (err, imageFound) => {
        if (err) res.status(500).json({ success: 0, message: err })
        else if (!imageFound._id) res.status(404).json({ success: 0, message: "Not Found" })
        else res.json({ success: 1, image: imageFound })
    })
});

ImageRouter.post("/", (req, res) => {
    const { url, caption, title } = req.body;
    console.log(req.body);

    ImageModel.create({ url, caption, title }, (err, imageCreated) => {
        if (err) res.status(500).json({ success: 0, message: err })
        else res.status(201).json({ success: 1, image: imageCreated })
    })
});

ImageRouter.put("/:id", (req, res) => {
    let imageId = req.params.id;
    const { url, caption, title } = req.body;
    ImageModel.findById(imageId, (err, imageFound) => {
        if (err) res.status(500).json({ success: 0, message: err })
        else if (!imageFound._id) res.status(404).json({ success: 0, message: "Not Found" })
        else {
            for(key in { url, caption, title }) {
                if(imageFound[key] && req.body[key]) imageFound[key] = req.body[key];
            }
            imageFound.save((err, imageUpdated) => {
                if (err) res.status(500).json({ success: 0, message: err })
                else res.status(201).json({ success: 1, image: imageUpdated })
            })
        }
    })
});

ImageRouter.delete("/:id", (req, res) => {
    var imageId = req.params.id;
    ImageModel.findByIdAndRemove(imageId, (err, imageRemoved) => {
        if(err) {
            res.status(500).json({success: 0, message: err})
        } else if(!imageRemoved._id) {
            res.status(404).json({success: 0, message: "Not Found!"})
        }else {
            res.json({success: 1, image: imageRemoved});
        }
    })
});

module.exports = ImageRouter;