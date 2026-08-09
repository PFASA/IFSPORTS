const { DataTypes } = require("sequelize");

const sequelize = require("../Database/database");

const Treino = sequelize.define("Treino",{

   
   data:{type:DataTypes.DATEONLY},
   horario:{type:DataTypes.STRING, allowNull:false},
   conteudo:{type:DataTypes.STRING, allowNull:false},
   observacao:{type:DataTypes.STRING, allowNull:false}
    
})

module.exports = Treino;