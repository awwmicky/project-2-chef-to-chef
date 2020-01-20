'use strict';

const fs        = require('fs');
const path      = require('path');
const Sequelize = require('sequelize');
const basename  = path.basename(__filename);
const env       = process.env.NODE_ENV || 'development';
const config    = require(__dirname + '/../config/config.js')[env];

// going to export db w/ all models
var db = {};


// setup Sequelize ORM connection
// reference 'sequelize' to 'Sequelize
// production or development
let sequelize;
if (config.use_env_variable) {
    sequelize = new Sequelize(
        process.env[
            config.use_env_variable
        ],
        config
    );
} else {
    sequelize = new Sequelize(
        config.database,
        config.username,
        config.password,
        config
    );
}


// for loop 'models/' folder
// exclude 'index.js' file
// add all Models into 'db' (obj)
fs
.readdirSync( __dirname )
.filter( file => {
    return (
        (file.indexOf('.') !== 0) &&
        (file !== basename) &&
        (file.slice(-3) === '.js')
    );
})
.forEach( file => {
    var model = sequelize['import'](
        path.join(__dirname, file)
    );
    db[model.name] = model;
});


// associate to all correct models
Object
.keys(db)
.forEach( (modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});


// add sequelize connection
// add Sequelize library
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// console.log(db);
// db === obj w/ models


module.exports = db;