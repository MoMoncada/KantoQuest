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
        party_score: {
            type: DataTypes.INTEGER            
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        pokemon_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'pokemon',
                key: 'id',
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'pokedex'
    }
)

module.exports = Party