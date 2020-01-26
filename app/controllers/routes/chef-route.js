const express = require('express');
const router = express.Router();

const parse = require('../../custom/parse');
const {
    Op
} = require("../../models/").Sequelize;
const {
    Chef,
    Cuisine
} = require("../../models/");



router.get("/all", (req, res) => {
    Chef
        .findAll()
        .then(allChefs => {
            var chefs = parse.captureData(allChefs)

            res.send(chefs)
        })
        .catch((err) => {
            console.log(err)
        })
})


router.get("/search", (req, res) => {
    let cuisine = req.query.cuisine;
    let price = req.query.price;
    console.log(
        `Back-End: ${cuisine} & ${price}`
    )
    // res.send({
    //     cuisine: cuisine,
    //     price: price
    // })

    let cuisineMap = {
        "mexican": 1,
        "chinese": 2,
        "american": 3
    };
    // input ID for Cuisine ID


    let priceRange;

    if (price === "1") {
        priceRange = [10, 30]
    } else if (price === "2") {
        priceRange = [31, 60]
    } else if (price === "3") {
        priceRange = [61, 100]
    }

    Chef
        .findAll({
            where: {
                CuisineId: cuisineMap[cuisine],
                price: {
                    [Op.between]: priceRange
                }
            },
            include: [{
                model: Cuisine,
                required: true,
                through: {
                    where: {
                        CuisineId: 2
                    }
                }
            }]
        })
        .then((allChefs) => {
            console.log(allChefs)
            // parse.captureData(allChefs)
            res.send(allChefs)
            // console.log(allChefs[0].Cuisine)
        })
        .catch((err) => {
            console.log(err)
        })
})

router.post("/create", (req, res) => {
    console.log(req.body)

    Chef
        .create({
            name: req.body.name,
            price: Number(req.body.price),
            cuisine: req.body.cuisine
        })
        .then((chef) => {
            // parse.captureData(chef)
            console.log(chef);
            res.send(chef)
        })
        .catch((err) => {
            console.log(err)
        })
})



/* ------------ */



router.delete('/delete/:id', (req, res) => {
    Chef
        .destory({
            where: {
                id: req.params.id
            }
        }).then(results => {
            res.send(results)
        })
})

router.put('/chef', (req, res) => {
    console.log('update')

    Chef
        .update({
            chef: req.body.chef,
            price: req.body.price,
            // cuisine: req.body.cuisine
        }, {
            where: {
                id: req.body.id
            }
        }).then(results => {
            res.send(results)
        })
})



module.exports = router;