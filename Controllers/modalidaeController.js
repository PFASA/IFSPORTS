const Modalidade = require("../models/modalidades");
const Professor = require("../models/Professor");
const Inscricao = require("../models/inscricao");
const Aluno = require("../models/aluno");


exports.salvar = async(req,res)=>{

    await Modalidade.create({

        nome:req.body.nome,
        descricao:req.body.descricao,
        ProfessorId:req.body.professorId

    });

    res.redirect("/");

}
exports.verAlunos = async(req,res)=>{

    try{

        const modalidade = await Modalidade.findByPk(
            req.params.id,
            {

                include:{
                    model:Inscricao,

                    include:{
                        model:Aluno
                    }

                }

            }
        );


        res.render("alunosModalidade",{
            modalidade
        });


    }catch(error){

        console.log(error);

        res.send("Erro ao buscar alunos");

    }

}