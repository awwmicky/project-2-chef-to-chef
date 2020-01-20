const express = require('express');
const router = express.Router();
// const User = require("../../database/models").User

router.get("/", (req, res) => {
    Author.findAll({
        include: [comment]
    }).then(ser => {
        res.json(User);
    });
});

router.post("/", (req, res) => {
    // console.log(req.body)
    user.create({

    })
    res.json({
        message: "we did it"
    })
})

module.exports = router;