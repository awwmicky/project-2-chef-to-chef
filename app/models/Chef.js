module.exports = function (sequelize, DataTypes) {
    const Chef_Model = sequelize.define("Chef", {
        /* Chef field - name & price */
        name: DataTypes.STRING,
        price: DataTypes.INTEGER,
        // title: DataTypes.STRING,
        // is_requested: DataTypes.BOOLEAN,
        // is_approved: DataTypes.BOOLEAN
        
        // cuisine: DataTypes.STRING
    });

    console.log(Chef_Model);

    /* many-to-many relations through middle table */
    Chef_Model.associate = (models) => {
        Chef_Model.belongsToMany(models.Cuisine, {
            through: 'Chefs_and_Cuisines',
            timestamps: false
        })
    };

    return Chef_Model;
};