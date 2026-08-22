const { DataTypes } = require("sequelize");

const sequelize = require("../Database/database");

const Modalidade = sequelize.define("Modalidade",{

    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},

    nome:{type:DataTypes.STRING, allowNull:false},

    local:{type: DataTypes.ENUM("Ginásio", "Piscina", "Campo", "Quadra", "Quadra de Areia")},

    horario:{type:DataTypes.STRING, allowNull:false},

    descricao:{type:DataTypes.STRING, allowNull:false},

    professorId: {type: DataTypes.INTEGER, allowNull: false}
},
{
    tableName: "modalidades",
    timestamps: false
}
)

module.exports = Modalidade;