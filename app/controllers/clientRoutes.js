const express = require('express');
const router = express.Router();



router.get('/', (req, res) => {
    console.log('— Home Page —')

    res.render('home.hbs',
    {
        title: 'Home Page',
        style: 'home.css',
        script: 'home.js'
    }
    )
})

router.get('/add-chef', (req, res) => {
    console.log('- Add Chef Page -')

    res.render(
        'add-chef.hbs',
        {
            title: 'Add Chef Page',
            style: 'add-chef.css',
            script: 'add-chef.js'
        }
    )
})

// router.get('*', (req,res) => {
//     console.log('— NO Page —')
//     res.send('Page Not Found')
// })



module.exports = router;