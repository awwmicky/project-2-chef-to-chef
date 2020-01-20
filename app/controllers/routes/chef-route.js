const express = require('express');
const router = express.Router();

const parse = require('../../custom/parse');
const { Op } = require("../../models/").Sequelize;
const { Chef } = require("../../models/");
// const comment = require("../../database/models").comment
// const cuisine = require("../../database/models").cuisine

// router.post("/new", (req, res) => {
//     Chef.create({
//         name: req.body.name
//     }).then(newChef => {
//         res.send(newChef);
//     });
// });

// router.post("/new", (req, res) => {
//     Chef.create({
//         name: req.body.name
//     }).then(Chef => {
//         res.json({
//             message: "we did it"
//         })
//     })
// })

router.get("/all", (req, res) => {
    Chef
    .findAll()
    .then(allChefs => {
        parse.captureData(allChefs)
        res.send(allChefs)
    })
    .catch((err) => {
        console.log(err)
    })
});

router.get("/search/:cuisine/:price", (req, res) => {
    let cuisine = req.params.cuisine;
    let price = req.params.price;
    console.log(cuisine, price)
// router.get("/search", (req, res) => {
//     let cuisine = req.query.cuisine;
//     let price = req.query.price;
//     console.log(cuisine, price)

    let priceRange;

    if (price === "1") {
        priceRange = [10,30]
    } else if (price === "2") {
        priceRange = [31,60]
    } else if (price === "3") {
        priceRange = [61,100]
    }

    Chef
    .findAll({
        where: {
            cuisine: cuisine,
            price: {
                [Op.between]: priceRange
            }
        }
    })
    .then( allChefs => {
        // console.log(allChefs)
        parse.captureData(allChefs)
        res.send(allChefs)
    })
    .catch( err => {
        console.log(err)
    })
})

router.post("/add", (req, res) => {
    console.log(req.body)

    Chef
    .create({
        name: req.body.name,
        price: Number(req.body.price),
        cuisine: req.body.cuisine
    })
    .then(chef => {
        // parse.captureData(chef)
        console.log(chef);
        res.send(chef)
    })
    .catch((err) => {
        console.log(err)
    })
})



module.exports = router;