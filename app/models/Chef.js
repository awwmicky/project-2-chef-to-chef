module.exports = function (sequelize, DataTypes) {
    var Chef_Model = sequelize.define("Chef", {
        // Giving the Chef model a name of type STRING
        name: DataTypes.STRING,
        price: DataTypes.INTEGER,
        cuisine: DataTypes.STRING

        // name: DataTypes.STRING,
        // price: DataTypes.INTEGER,
        // cuisine: DataTypes.STRING,
        // allowNull: false,

    });

    console.log(Chef_Model);

    // Chef.associate = function (models) {
    //     Chef.hasMany(models.Comment, {
    //         onDelete: "cascade"
    //     });
    // };
    // Chef.hasMany(models.cuisine, {
    //     onDelete: "cascade"
    // });
    return Chef_Model;
};