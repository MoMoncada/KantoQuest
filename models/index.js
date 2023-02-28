const Pokedex = require('./Pokedex')
const User = require('./Users')
const Party = require('./Party')
const Pokemon = require('./Pokemon')

User.hasOne(Pokedex, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})
