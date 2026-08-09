const { DataTypes } = require("sequelize");

const sequelize = require("../Database/database");

const Professor = sequelize.define("Professor",{

   
    nome:{type:DataTypes.STRING, allowNull:false},
    idade:{type:DataTypes.INTEGER},
    email:{type:DataTypes.STRING, allowNull:false},
    senha:{type:DataTypes.STRING, allowNull:false},
    Formacao:{type:DataTypes.STRING, allowNull:false}

})

module.exports = Professor;