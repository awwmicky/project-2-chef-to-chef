const express = require('express');
const router = express.Router();

const parse = require('../../custom/parse');
const { Op } = require("../../models/").Sequelize;
const { 
    Chef, Cuisine 
} = require("../../models/");



router.get("/all", (req, res) => {
    Cuisine
    .findAll()
    .then( cuisines => {
        console.log(cuisines)
        res.send(cuisines)
    })
    .catch( err => {
        console.log(err) 
    })
})

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
        type: req.body.type,
    }).then( cuisine => {
        res.send(cuisine)
    })
    .catch( err => {
        console.log(err) 
    })
});

router.post("/setup", (req, res) => {
    Cuisine
    .bulkCreate([
        { type : 'mexican' },
        { type : 'chinese' },
        { type : 'american' }
    ])
    .then( chefData => {
        console.log(chefData)
        // console.log( chefData.get() )
        res.send('— cuisine —')
    })
    .catch(err => {
        console.log(err)
    })
})



module.exports = router;