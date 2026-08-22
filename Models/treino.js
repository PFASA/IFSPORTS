const { DataTypes } = require("sequelize");

const sequelize = require("../Database/database");

const Treino = sequelize.define("Treino",{

   id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},

   titulo: {type: DataTypes.STRING, allowNull: false},

   descricao: {type: DataTypes.TEXT, allowNull:false},

   data:{type:DataTypes.DATE, allowNull: true},

   horario:{type:DataTypes.STRING, allowNull:false},

   professorId: {type: DataTypes.INTEGER, allowNull: false},

   inscricaoModalidadeId: {type: DataTypes.INTEGER,allowNull: false}
},
{
   tableName: "treinos",
   timestamps: false
}
)

module.exports = Treino;