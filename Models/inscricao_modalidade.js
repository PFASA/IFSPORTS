const { DataTypes } = require("sequelize");

const sequelize = require("../Database/database");

const Inscricao_modalidade = sequelize.define("Inscricao_modalidade",{

    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},

    alunoId: {type: DataTypes.INTEGER, allowNull: false},

    modalidadeId: {type: DataTypes.INTEGER, allowNull: false},

    data_inscricao:{type:DataTypes.DATE, defaultValue:DataTypes.NOW},

    status:{type:DataTypes.ENUM("pedente", "aprovada", "recusada"), defaultValue:"pendente"},

    observacao:{type:DataTypes.STRING}, 
},
{
    tableName: "inscrição_modalidade",
    timestamps: false,
    index: [{unique: true, fields: ["aluno", "modalidadeId"]}]

}

)

module.exports = Inscricao_modalidade;