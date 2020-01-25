module.exports = function (sequelize, DataTypes) {
    const Chef_Model = sequelize.define("Chef", {
        // Giving the Chef model a name of type STRING
        name: DataTypes.STRING,
        price: DataTypes.INTEGER,
        cuisine: DataTypes.STRING
    });

    console.log(Chef_Model);

    // Chef_Model.associate = function (models) {
    //     Chef_Model.belongsTo(models.Cuisine, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    // };

    return Chef_Model;
};