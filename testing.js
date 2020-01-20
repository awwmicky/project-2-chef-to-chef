require("dotenv").config()

// const db.Chef = require("./app/models")
// const  Chef  = require("./app/models").Chef
const { Chef } = require("./app/models")
// const { comment } = require("./app/database/models")
// const { cuisine } = require("./app/database/models")



const db = require("./app/models")

db.sequelize.authenticate()
.then( _ => console.log('Database Connected — ✓'))
.catch(err => console.log(`Err: ${err}`))

db.sequelize.sync().then(() => {
/*  */ 
// findAllChef()
createManyChef()
/*  */
}).catch((err) => console.log(err))

findAllChef = () => {
    Chef
    .findAll()
    .then(allChefs => console.log(allChefs))
    .catch((err) => console.log(err))
};

createManyChef = () => {
    Chef
    .bulkCreate([
        { name: 'Link', price: 70, cuisine: 'mexican' },
        { name: 'Zelda', price: 30, cuisine: 'chinese' },
        { name: 'Kevin', price: 20, cuisine: 'american' },
    ])
    .then( chefData => {
        console.log(chefData);
    })
    .catch( err => {
        console.log(err);
    })
};