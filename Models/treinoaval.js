const { DataTypes } = require("sequelize");

const sequelize = require("../Database/database");

const TreinoAval = sequelize.define("TreinoAval",{

   
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},

    treinoId: {type: DataTypes.INTEGER, allowNull: false, unique: true},

    nota: {type: DataTypes.FLOAT, allowNull: true},
    comentario: { type: DataTypes.TEXT, allowNull: true},


},
{
tableName: 'treinos_avaliacoes',
timestamps: true
}
)

module.exports = TreinoAval;