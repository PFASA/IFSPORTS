const { DataTypes } = require("sequelize");

const sequelize = require("../Database/database");

const Professor = sequelize.define("Professor",{

    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},

    usuarioId: {type: DataTypes.INTEGER, allowNull: false, unique:true},

    nome:{type:DataTypes.STRING, allowNull:false},

    dataNascimento: { type: DataTypes.DATEONLY,
    allowNull: false},

    Formacao:{type:DataTypes.STRING, allowNull:false}

},
{
    tableName: 'professores',
    timestamps: true
}
)

module.exports = Professor;