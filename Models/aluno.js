const { DataTypes } = require("sequelize");

const sequelize = require("../Database/database");

const Aluno = sequelize.define("Aluno",{

   
    nome:{type:DataTypes.STRING, allowNull:false},
    idade:{type:DataTypes.INTEGER},
    email:{type:DataTypes.STRING, allowNull:false},
    senha:{type:DataTypes.STRING, allowNull:false},
    Curso:{type: DataTypes.ENUM("Informatica", "Agropecuaria", "Agroindustria"),}

})

module.exports = Aluno;