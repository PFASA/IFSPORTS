const { DataTypes } = require("sequelize");

const sequelize = require("../Database/database");

const Inscricao = sequelize.define("Inscricao",{

   
    data_inscricao:{type:DataTypes.DATE, defaultValue:DataTypes.NOW},
    status:{type:DataTypes.ENUM("Inativo", "Ativo"), defaultValue:"Ativo"},
    observacao:{type:DataTypes.STRING},
   
})

module.exports = Inscricao;