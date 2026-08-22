const { DataTypes } = require("sequelize");

const sequelize = require("../Database/database");

const MsgTreino = sequelize.define(
    "MsgTreino",
    {
        id: {type: DataTypes.INTEGER, primaryKey: true,autoIncrement: true},

        treinoId: {type: DataTypes.INTEGER, allowNull: false},

        usuarioId: {type: DataTypes.INTEGER, allowNull: false},

        texto: {type: DataTypes.TEXT,allowNull: false},

        resultado: {type: DataTypes.TEXT,allowNull: true}
    },
    {
        tableName: "mensagens_treino",
        timestamps: false
    }
);

module.exports = MsgTreino;