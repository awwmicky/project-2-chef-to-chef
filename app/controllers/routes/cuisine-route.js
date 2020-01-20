const express = require('express');
const router = express.Router();
// const cuisine = require("../../database/models").cuisine
// const Chef = require("../../database/models").Chef

router.get("/find/:id", (req, res) => {
    cuisine.findAll({
        where: {
            UserId: req.params.id
        },
        include: [Chef]
    }).then(usercuisines => {
        res.send(usercuisines);
    });
});

router.post("/new", (req, res) => {
    cuisine.create({
        text: req.body.text,
        UserId: req.body.userId
    }).then(cuisine => {
        res.send(cuisine);
    });
});


module.exports = router;