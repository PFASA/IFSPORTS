const { DataTypes } = require("sequelize");

const sequelize = require("../Database/database");

const ResultadoAtributo = sequelize.define(
    "ResultadoAtributo",
    {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},

        treinoAvalId: {type: DataTypes.INTEGER, allowNull: false},

        atributoId: {type: DataTypes.INTEGER, allowNull: false},

        valor: {type: DataTypes.FLOAT.UNSIGNED, allowNull: false}
    },
    {
        tableName: "resultados_atributos",
        timestamps: false,

        indexes: [{unique: true,fields: [ "treinoAvalId","atributoId"]}]
    }
);

module.exports = ResultadoAtributo;