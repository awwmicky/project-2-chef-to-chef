module.exports = function (sequelize, DataTypes) {
    var cuisine = sequelize.define("cuisine", {
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

    cuisine.associate = function (models) {
        cuisine.belongsTo(models.Chef, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return cuisine;
};