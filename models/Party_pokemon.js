const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection')

class Party extends Model {
    // Party Methods
}

Party.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        pokemon_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'pokemon',
                key: 'id',
            }
        },
        party_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'party',
                key: 'id',
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'party_pokemon'
    }
)

module.exports = Party