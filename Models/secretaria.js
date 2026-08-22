const { DataTypes } = require('sequelize');
const sequelize = require('../Database/database');

const Secretaria = sequelize.define(
    'Secretaria',
    {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},

        usuarioId: {type: DataTypes.INTEGER, allowNull: false, unique: true},

        nome: {type: DataTypes.STRING, allowNull: false, unique: true},

        cpf: {type: DataTypes.STRING, allowNull: false, unique: true},

        cargo: { type: DataTypes.STRING, allowNull: false}
    },
    {
        tableName: 'agentes_secretarias',
        timestamps: true
    }
);

module.exports = Secretaria;