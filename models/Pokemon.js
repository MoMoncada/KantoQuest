const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection')

class Pokemon extends Model {
    // Pokemon Methods
}

// init pokemon sequelize object 
Pokemon.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        types: {
            type: Sequelize.ARRAY(Sequelize.TEXT),
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'pokemon'
    }
)

module.exports = Pokemon
