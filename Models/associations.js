// Models/associations.js

// 1. Importação de todos os modelos existentes
const Usuario = require("./usuarios");
const Aluno = require("./aluno");
const Professor = require("./professor");
const Secretaria = require("./secretaria");
const Modalidade = require("./modalidades");
const Atributo = require("./atributos");
const ModalidadeAtributo = require("./modalidadeAtributos");
const InscricaoModalidade = require("./inscricao_modalidade");
const Treino = require("./treino");
const TreinoAval = require("./treinoaval");
const ResultadoAtributo = require("./resultadoAtributo");
const MsgTreino = require("./msgTreino");

// ============================================================
// 2. Especializações / Perfis de Usuário (1:1)
// ============================================================
Usuario.hasOne(Aluno, { foreignKey: "usuarioId", as: "aluno", onDelete: "CASCADE", hooks: true });
Aluno.belongsTo(Usuario, { foreignKey: "usuarioId", as: "usuario" });

Usuario.hasOne(Professor, { foreignKey: "usuarioId", as: "professor", onDelete: "CASCADE", hooks: true });
Professor.belongsTo(Usuario, { foreignKey: "usuarioId", as: "usuario" });

Usuario.hasOne(Secretaria, { foreignKey: "usuarioId", as: "secretaria", onDelete: "CASCADE", hooks: true });
Secretaria.belongsTo(Usuario, { foreignKey: "usuarioId", as: "usuario" });

// ============================================================
// 3. Modalidade & Professor (1:N)
// ============================================================
Professor.hasMany(Modalidade, { foreignKey: "professorId", as: "modalidades", onDelete: "CASCADE", hooks: true });
Modalidade.belongsTo(Professor, { foreignKey: "professorId", as: "professor" });

// ============================================================
// 4. Modalidade & Aluno (N:N via InscricaoModalidade)
// ============================================================
Modalidade.belongsToMany(Aluno, {
    through: { model: InscricaoModalidade, unique: false },
    foreignKey: "modalidadeId",
    as: "alunos",
    onDelete: "CASCADE"
});
Aluno.belongsToMany(Modalidade, {
    through: { model: InscricaoModalidade, unique: false },
    foreignKey: "alunoId",
    as: "modalidades",
    onDelete: "CASCADE"
});

// Acesso direto à tabela intermediária de inscrição
Modalidade.hasMany(InscricaoModalidade, { foreignKey: "modalidadeId", as: "inscricoes", onDelete: "CASCADE", hooks: true });
InscricaoModalidade.belongsTo(Modalidade, { foreignKey: "modalidadeId", as: "modalidade" });

Aluno.hasMany(InscricaoModalidade, { foreignKey: "alunoId", as: "inscricoes", onDelete: "CASCADE", hooks: true });
InscricaoModalidade.belongsTo(Aluno, { foreignKey: "alunoId", as: "aluno" });

// ============================================================
// 5. Modalidade & Atributos (N:N via ModalidadeAtributo)
// ============================================================
Modalidade.belongsToMany(Atributo, {
    through: { model: ModalidadeAtributo, unique: false },
    foreignKey: "modalidadeId",
    as: "atributos",
    onDelete: "CASCADE"
});
Atributo.belongsToMany(Modalidade, {
    through: { model: ModalidadeAtributo, unique: false },
    foreignKey: "atributoId",
    as: "modalidades",
    onDelete: "CASCADE"
});

// Acesso direto à tabela intermediária de atributos da modalidade
Modalidade.hasMany(ModalidadeAtributo, { foreignKey: "modalidadeId", as: "modalidadeAtributos", onDelete: "CASCADE", hooks: true });
ModalidadeAtributo.belongsTo(Modalidade, { foreignKey: "modalidadeId", as: "modalidade" });

Atributo.hasMany(ModalidadeAtributo, { foreignKey: "atributoId", as: "modalidadeAtributos", onDelete: "CASCADE", hooks: true });
ModalidadeAtributo.belongsTo(Atributo, { foreignKey: "atributoId", as: "atributo" });

// ============================================================
// 6. Treino & Modalidade (1:N)
// ============================================================
Modalidade.hasMany(Treino, { foreignKey: "modalidadeId", as: "treinos", onDelete: "CASCADE", hooks: true });
Treino.belongsTo(Modalidade, { foreignKey: "modalidadeId", as: "modalidade" });

// ============================================================
// 7. Mensagens de Treino (MsgTreino)
// ============================================================
Treino.hasMany(MsgTreino, { foreignKey: "treinoId", as: "mensagens", onDelete: "CASCADE", hooks: true });
MsgTreino.belongsTo(Treino, { foreignKey: "treinoId", as: "treino" });

Usuario.hasMany(MsgTreino, { foreignKey: "usuarioId", as: "mensagensEnviadas", onDelete: "CASCADE", hooks: true });
MsgTreino.belongsTo(Usuario, { foreignKey: "usuarioId", as: "autor" });

// ============================================================
// 8. Avaliação de Treino (TreinoAval)
// ============================================================
Treino.hasMany(TreinoAval, { foreignKey: "treinoId", as: "avaliacoes", onDelete: "CASCADE", hooks: true });
TreinoAval.belongsTo(Treino, { foreignKey: "treinoId", as: "treino" });

Aluno.hasMany(TreinoAval, { foreignKey: "alunoId", as: "avaliacoes", onDelete: "CASCADE", hooks: true });
TreinoAval.belongsTo(Aluno, { foreignKey: "alunoId", as: "aluno" });

// ============================================================
// 9. Resultados de Atributos (ResultadoAtributo)
// ============================================================
TreinoAval.hasMany(ResultadoAtributo, { foreignKey: "treinoAvalId", as: "resultadosAtributos", onDelete: "CASCADE", hooks: true });
ResultadoAtributo.belongsTo(TreinoAval, { foreignKey: "treinoAvalId", as: "treinoAval" });

Atributo.hasMany(ResultadoAtributo, { foreignKey: "atributoId", as: "resultados", onDelete: "CASCADE", hooks: true });
ResultadoAtributo.belongsTo(Atributo, { foreignKey: "atributoId", as: "atributo" });

// ============================================================
// 10. Exportação dos Modelos
// ============================================================
module.exports = {
    Usuario,
    Aluno,
    Professor,
    Secretaria,
    Modalidade,
    Atributo,
    ModalidadeAtributo,
    InscricaoModalidade,
    Treino,
    TreinoAval,
    ResultadoAtributo,
    MsgTreino
};