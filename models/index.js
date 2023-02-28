const Pokedex = require('./Pokedex')
const User = require('./User')
const Party = require('./Party')
const Pokemon = require('./Pokemon')

// User has one Pokedex
User.hasOne(Pokedex, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

Pokedex.belongsTo(User, {
    foreignKey: 'user_id'
})

// User has many parties
User.hasMany(Party, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

Party.belongsTo(User, {
    foreignKey: 'user_id'
})

// Pokedex can have many Pokemon
Pokedex.hasMany(Pokemon, {
    foreignKey: 'pokemon_id',
    onDelete: 'SET NULL'
})

// Pokemon can belong to many Pokedex
Pokemon.belongsToMany(Pokedex, {
    through: Pokedex_pokemon
})

Pokedex.belongsToMany(Pokemon, {
    through: Pokedex_pokemon
})

Pokemon.belongsToMany(Party, {
    through: Party_pokemon
})

Party.belongsToMany(Pokemon, {
    through: Party_pokemon
})



Pokemon.belongsToMany()