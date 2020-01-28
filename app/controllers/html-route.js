const express = require('express');
const router = express.Router();



router.get('/', (req, res) => {
    console.log('— Home Page —')

    res.render('home.hbs', {
        title: 'Home Page',
        style: 'home.css',
        script: 'home.js'
    })
})

router.get('/add-chef', (req, res) => {
    console.log('- Add Chef Page -')

    res.render('add-chef.hbs', {
        title: 'Add Chef Page',
        style: 'add-chef.css',
        script: 'add-chef.js'
    })
})

router.get("/chef-listing", (req, res) => {
    console.log('— Chef Listing Page —')
    
    res.render("chef-listing.hbs", {
        title: 'Chef Listing Page',
        style: 'chef-listing.css',
        script: 'chef-listing.js'
    })
})

/*  */
router.get("/do-not-edit", (req, res) => {
    console.log('— DO NOT Page —')

    res.render("do-not-edit.hbs", {
        title: 'DO NOT Page',
        style: 'do-not-edit.css',
        script: 'do-not-edit.js'
    })
})
/*  */
router.get("/do-not-edit", (req, res) => {
    console.log('— Do-Not-Edit Page —')
    
    res.render("do-not-edit.hbs", {
        title: 'Do-Not-Edit Page',
        style: 'do-not-edit.css',
        script: 'do-not-edit.js'
    })
})
/*  */

router.get('*', (req,res) => {
    // console.log('— NO Page —')
    // res.send('Page Not Found')
    console.log('— ERROR Page —')
    
    res.render("do-not-edit.hbs", {
        title: 'ERROR Page',
        style: 'do-not-edit.css',
        script: 'do-not-edit.js'
    })
})



module.exports = router;