const express = require('express');
const router = express.Router();

const parse = require('../../custom/parse');
const { Op } = require("../../models/").Sequelize;
const { 
    Chef, Cuisine 
} = require("../../models/");



router.get("/all", (req, res) => {
    Chef
    .findAll({
        include: [Cuisine]
    })
    .then( allChefs => {
        // console.log(allChefs)
        let chefs = parse.captureData(allChefs)

        res.send(chefs)
    })
    .catch( err => {
        console.log(err)
    })
});

router.get("/search", (req, res) => {
    console.log(req.query)
  
    let item = req.query.cuisine;
    let price = Number( req.query.price );
    console.log(`Back-End: ${item} - ${price}`)

    let cuisines = {
        mexican  :  1,
        chinese  :  2,
        american :  3 
    };

    let priceRange;

    if ( price === 1 ) {
        priceRange = [10, 30]
    } else if ( price === 2 ) {
        priceRange = [31, 60]
    } else if ( price === 3 ) {
        priceRange = [61, 100]
    }

    Chef
    .findAll({
        where: {
            price: {
                [Op.between]: priceRange
            } 
        },
        include: [
            {
                model: Cuisine,
                required: true,
                through: {
                    where: {
                        CuisineId: cuisines[item]
                    }
                }
            }
        ]
    })
    .then( chefs => {
        // console.log(chefs)
        parse.captureData(chefs)
        res.send(chefs)
    })
    .catch( err => {
        console.log(err);
    })
})

router.post("/create", (req, res) => {
    console.log(req.body)

    let data = {
        name: req.body.name,
        price: Number( req.body.price )
    };
    console.log(data);

    let item = req.body.cuisine;
    let cuisines = {
        mexican  :  1,
        chinese  :  2,
        american :  3 
    };
    console.log(data, cuisines, item);

    Chef
    .create(data)
    .then( chefData => {
        console.log(chefData)
        applyCuisine(chefData)
    })
    .catch( err => {
        console.log(err)
    })

    function applyCuisine(chefData) {
        chefData
        .addCuisine(
            cuisines[item]
        )
        .then( cuisineData => {
            console.log(cuisineData)
            responseData(chefData)
        })
        .catch( err => {
            console.log(err)
        })
    }

    function responseData(chefData) {
        console.log( chefData )
        console.log(chefData.dataValues.id)
        const { id } = chefData.dataValues;

        Chef
        .findByPk(
            id,
            {
                include: [Cuisine]
            }
        )
        .then( results => {
            console.log(results)
            res.send(results)
            // res.redirect('/')
        })
        .catch( err => {
            console.log(err)
        })
    }
})
  
router.post("/setup", (req, res) => {
    Chef
    .bulkCreate([

        { name: 'Billy',     price: 15  },
        { name: 'Mandy',     price: 19  },
        { name: 'Grim',      price: 29  },
        { name: 'Link',      price: 90  },
        { name: 'Zelda',     price: 100 },
        { name: 'Ganondorf', price: 80  }
    ])
    .then( chefData => {
        console.log(chefData)
        res.send('— chef —')
    })
    .catch( err => {
        console.log(err)
    })
})
  
/* ---------- */

  
 
// router.delete('/delete/:id', (req, res) => {
//     console.log('delete')
    
//     Chef
//     .destory({
//         where: {
//             id: req.params.id
//         }
//     }).then(results => {
//         res.send(results)
//     })
// })

// router.put('/update', (req, res) => {
//     console.log('update')
    
//     Chef
//     .update({
//         chef: req.body.chef,
//         price: req.body.price,
//         cuisine: req.body.cuisine
//     }, {
//         where: {
//             id: req.body.id
//         }
//     }).then(results => {
//         res.send(results)
//     })
// })


module.exports = router;