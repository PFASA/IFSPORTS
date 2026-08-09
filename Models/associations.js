const Aluno = require("./aluno");
const Professor = require("./professor");
const ModalidadeTreino = require("./modalidades");
const InscricaoTreino = require("./inscricao");
const Treino = require("./treino");
const AvaliacaoTreino = require("./avaltreino");



// PROFESSOR - MODALIDADE

Professor.hasMany(ModalidadeTreino);

ModalidadeTreino.belongsTo(Professor);



// ALUNO - INSCRICAO

Aluno.hasMany(InscricaoTreino);

InscricaoTreino.belongsTo(Aluno);



// MODALIDADE - INSCRICAO

ModalidadeTreino.hasMany(InscricaoTreino);

InscricaoTreino.belongsTo(ModalidadeTreino);



// MODALIDADE - TREINO

ModalidadeTreino.hasMany(Treino);

Treino.belongsTo(ModalidadeTreino);



// INSCRICAO - AVALIACAO

InscricaoTreino.hasMany(AvaliacaoTreino);

AvaliacaoTreino.belongsTo(InscricaoTreino);



// TREINO - AVALIACAO

Treino.hasMany(AvaliacaoTreino);

AvaliacaoTreino.belongsTo(Treino);