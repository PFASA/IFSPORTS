const { DataTypes } = require("sequelize");

const sequelize = require("../Database/database");

const ModalidadeAtributos = sequelize.define(
    "ModalidadeAtributos",
    {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},

        modalidadeId: {type: DataTypes.INTEGER, allowNull: false},

        atributoId: { type: DataTypes.INTEGER, allowNull: false}
    },
    {
        tableName: "modalidade_atributos",
        timestamps: false,
        indexes: [{unique: true,fields: [ "modalidadeId","atributoId"]}]
    }
);

module.exports = ModalidadeAtributos;
