module.exports = (sequelize, DataTypes) => {
    const Genre = sequelize.define("Genre", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nama: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return Genre;
};