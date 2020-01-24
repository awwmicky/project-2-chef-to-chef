const express = require('express');
const router = express.Router();
const { comment } = require('../app/models');
// const comment = require("../../database/models").comment
// const User = require("../../database/models").User



router.get("/find/:id", (req, res) => {
    comment.findAll({
        where: {
            UserId: req.params.id
        },
        include: [User]
    }).then(usercomments => {
        res.send(usercomments);
    });
});

router.post("/new", (req, res) => {
    comment.create({
        text: req.body.text,
        UserId: req.body.userId
    }).then(comment => {
        res.send(comment);
    });
});



// module.exports = router;