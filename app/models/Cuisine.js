module.exports = function (sequelize, DataTypes) {
    const Cuisine_Model = sequelize.define('Cuisine', {
        type: {
            type: DataTypes.STRING,
        }
    });

    console.log(Cuisine_Model)

    Cuisine_Model.associate = (models) => {
        Cuisine_Model.belongsToMany(models.Chef, {
            through: 'Chefs_and_Cuisines',
            timestamps: false
        })
    };

    return Cuisine_Model;
};