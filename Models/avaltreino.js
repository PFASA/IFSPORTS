const { DataTypes } = require("sequelize");

const sequelize = require("../Database/database");

const Avaltreino = sequelize.define("Avaltreino",{

   
    presenca:{type:DataTypes.BOOLEAN},
    desempenho:{type: DataTypes.ENUM("Pessímo", "Ruim", "Mediano", "Bom", "Muito Bom"), allowNull:false},
    observacao:{type:DataTypes.STRING, allowNull:false},
   
})

module.exports = Avaltreino;