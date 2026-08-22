const { DataTypes } = require("sequelize");

const sequelize = require("../Database/database");

const Aluno = sequelize.define("Aluno",{

    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},

    nome:{type:DataTypes.STRING, allowNull:false},

    usuarioId: {type: DataTypes.INTEGER, allowNull: false, unique: true},

    dataNascimento: { type: DataTypes.DATEONLY,
    allowNull: false},

    altura:{type: DataTypes.FLOAT, allowNull: false},
    
    peso_corporal:{type: DataTypes.FLOAT, allowNull: false},

    Curso:{type: DataTypes.ENUM("Informatica", "Agropecuaria", "Agroindustria"),},

    
    turma :{type: DataTypes.STRING, allowNull: false},
},
{
    tableName: "alunos",
    timestamps: true
}
)

module.exports = Aluno;