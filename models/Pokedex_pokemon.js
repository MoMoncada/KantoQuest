const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection')

class Pokedex_pokemon extends Model {}

Pokedex_pokemon.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        pokedex_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'pokedex',
                key: 'id'
            },
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
        modelName: 'pokedex_pokemon'
    }
)

module.exports = Pokedex_pokemon