const Professor = require("../Models/professor");
const Modalidade = require("../models/modalidades");
const Inscricao = require("../models/inscricao");



exports.salvar = async(req,res)=>{

    await Professor.create({

        nome:req.body.nome,
        idade:req.body.idade,
        email:req.body.email,
        senha:req.body.senha,
        formacao:req.body.formacao


    });

    res.redirect("/");

}

exports.minhasModalidades = async(req,res)=>{


    // exemplo:
    // professor logado tem id 3

    const professorId = 3;


    const professor = await Professor.findByPk(
        professorId,
        {

            include:{
                model:ModalidadeTreino,

                include:{
                    model:InscricaoTreino
                }

            }

        }
    );


    res.render("modalidadesProfessor",{
        professor
    });


}