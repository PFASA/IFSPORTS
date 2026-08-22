const { DataTypes } = require("sequelize");

const sequelize = require("../Database/database");

const Usuario = sequelize.define("Usuario",{

    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},

    nome: {type: DataTypes.STRING, allowNull: false},

    email: {type: DataTypes.STRING, allowNull: false, unique: true},

    senha: {type: DataTypes.STRING, allowNull: false},

    perfil: {type: DataTypes.ENUM("aluno","professor","secretaria"), allowNull: false}
},
{
    tableName: "usuarios",
    timestamps: false
}
);

module.exports = Usuario;