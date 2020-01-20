module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        name: DataTypes.STRING,
        allowNull: false
    });

    User.associate = function (models) {
        User.hasMany(models.Comment, {
            onDelete: "cascade"
        });
    };

    return User;
};