const { DataTypes } = require("sequelize");

const sequelize = require("../Database/database");

const Modalidade = sequelize.define("Modalidade",{

   
    nome:{type:DataTypes.STRING, allowNull:false},
    local:{type: DataTypes.ENUM("Ginásio", "Piscina", "Campo", "Quadra", "Quadra de Areia")},
    horario:{type:DataTypes.STRING, allowNull:false},
    descricao:{type:DataTypes.STRING, allowNull:false}

})

module.exports = Modalidade;