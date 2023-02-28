const { Model, Datatypes } = require('sequelize')
const bcrypt = require('bcrypt')
const sequelize = require('../config/connection')

class User extends Model {
    // User Methods
    checkPassword(loginPw) {}
}

// initialise User
User.init(
    {
        id: {
            type: Datatypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: Datatypes.STRING,
            allowNull: false,

        },
        email: {
            type: Datatypes.STRING,
            allowNull: falser,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8]
            },
        },
    },
    {
        hooks: {
            beforeCreate: async (newUserData) => {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
    },
);

module.exports = User;