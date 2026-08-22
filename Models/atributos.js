const { DataTypes } = require("sequelize")
const sequelize = require("../Database/database")

const Atributo = sequelize.define("Atributo",{

    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},

    nome: { type: DataTypes.STRING, allowNull: false}, 

    descricao: {type: DataTypes.TEXT, allowNull: false},

    unidade: { type: DataTypes.STRING, allowNull: false},

    valorComp: {type: DataTypes.ENUM("maior_melhor", "menor_melhor"), allowNull: false},

}, 
{
    tableName: "atributos",
    timestamps: false
}
)
module.exports = Atributo;