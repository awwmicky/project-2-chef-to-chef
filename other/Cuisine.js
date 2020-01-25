module.exports = function (sequelize, DataTypes) {
    var Cuisine_Model = sequelize.define("Cuisine", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: false,
            len: [1]
        }
    });

    console.log(Cuisine_Model)

    Cuisine_Model.associate = function (models) {
        Cuisine_Model.hasMany(models.Chef, {
            onDelete: "cascade"
        });
    };

    return Cuisine_Model;
};