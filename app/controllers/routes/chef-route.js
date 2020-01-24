const express = require('express');
const router = express.Router();

const parse = require('../../custom/parse');
const {
    Op
} = require("../../models/").Sequelize;
const db = require("../../models/");
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

router.get("/chef", (req, res) => {
    Chef
        .findAll()
        .then(allChefs => {
            var chefs = parse.captureData(allChefs)
            console.table(chefs);

            res.send(chefs)
        })
        .catch((err) => {
            console.log(err)
        })
});

router.get("/search/:cuisine/:price", (req, res) => {
    let cuisine = req.params.cuisine;
    let price = req.params.price;
    console.log("THIS", cuisine, price)
    // router.get("/search", (req, res) => {
    //     let cuisine = req.query.cuisine;
    //     let price = req.query.price;
    //     console.log(cuisine, price)
    let cuisineMap = {
        "american": 3
    }
    let priceRange;

    if (price === "1") {
        priceRange = [10, 30]
    } else if (price === "2") {
        priceRange = [31, 60]
    } else if (price === "3") {
        priceRange = [61, 100]
    }

    db.Chef
        .findAll({
            where: {
                CuisineId: cuisineMap[cuisine],
                price: {
                    [Op.between]: priceRange
                }
            },
            include: [db.Cuisine]
        })
        .then(allChefs => {
            console.log(allChefs)
            parse.captureData(allChefs)
            res.send(allChefs)
            console.log(allChefs[0].Cuisine)
        })
        .catch(err => {
            console.log(err)
        })
})

router.post("/chef", (req, res) => {
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
router.delete('/chef/:id', (req, res) => {

    Chef
        .destory({
            where: {
                id: req.params.id
            }
        }).then(results => {
            res.send(chef)
        })
})
router.put('/chef', (req, res) => {

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