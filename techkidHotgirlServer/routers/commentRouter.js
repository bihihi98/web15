const express = require('express');
const CommentRouter = express.Router();
const CommentModel = require('../models/commentModel');
const UserModel = require('./models/userModel');

CommentRouter.use((req, res, next) => {
    console.log("User middleware");
    next();
});

CommentRouter.get("/:id", (req, res) => {
    let commentId = req.params.id;
    CommentModel.findById(commentId, (err, commentFound) => {
        if (err) res.status(500).json({ success: 0, message: err })
        else if (!commentFound._id) res.status(404).json({ success: 0, message: "Not Found" })
        else res.json({ success: 1, comment: commentFound })
    })
});

CommentRouter.post("/", (req, res) => {
    const { content } = req.body;
    console.log(req.body);

    CommentModel.create({ content }, (err, commentCreated) => {
        if (err) res.status(500).json({ success: 0, message: err })
        else res.status(201).json({ success: 1, comment: commentCreated })
    })
});

CommentRouter.put("/:id", (req, res) => {
    let commentId = req.params.id;
    const { content } = req.body;
    CommentModel.findById(commentId, (err, commentFound) => {
        if (err) res.status(500).json({ success: 0, message: err })
        else if (!commentFound._id) res.status(404).json({ success: 0, message: "Not Found" })
        else {
            for(key in { content }) {
                if(commentFound[key] && req.body[key]) commentFound[key] = req.body[key];
            }
            imageFound.save((err, commentUpdated) => {
                if (err) res.status(500).json({ success: 0, message: err })
                else res.status(201).json({ success: 1, comment: commentUpdated })
            })
        }
    })
});

CommentRouter.delete("/:id", (req, res) => {
    var commentId = req.params.id;
    CommentModel.findByIdAndRemove(commentId, (err, commentRemoved) => {
        if(err) {
            res.status(500).json({success: 0, message: err})
        } else if(!commentRemoved._id) {
            res.status(404).json({success: 0, message: "Not Found!"})
        }else {
            res.json({success: 1, comment: commentRemoved});
        }
    })
});

module.exports = CommentRouter;