const express = require('express');
const app = express();
require("dotenv").config()



app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())
app.use(express.static('./app/public/'))



const hbs = require('./app/views/hbs-engine/hbs.js');
const path = require('path');
app.set('views', path.join(__dirname, '/app/views/'))
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')



// const cuisineRoutes = require('./app/controllers/routes/cuisine-route.js');
const chefRoutes = require('./app/controllers/routes/chef-route.js');
const htmlRoutes = require('./app/controllers/html-route.js');

// app.use('/api/cuisine', cuisineRoutes)
// app.use('/api/chef', chefRoutes)
app.use('/', htmlRoutes)



const PORT = process.env.PORT || 5000;
const db = require('./app/models/');

db.sequelize.authenticate()
    .then(_ => console.log('Database Connected — ✓'))
    .catch(err => console.log(`Err: ${err}`))

db.sequelize.sync().then( _ => {
    app.listen(PORT, _ => {
        console.log(
            `Test Server — http://localhost:${PORT}`
        )
    })
}).catch(err => console.log(err))