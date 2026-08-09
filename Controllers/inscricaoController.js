const Inscricao = require("../models/inscricao");



exports.salvar = async(req,res)=>{


    try{


        await Inscricao.create({

            AlunoId:req.body.alunoId,
            ModalidadeTreinoId:req.body.modalidadeId,
            data_inscricao:req.body.data_inscricao,
            satus:req.body.status,
            observacao:req.body.observacao

        });


        res.redirect("/aluno");


    }catch(error){


        console.log(error);

        res.send("Erro ao realizar inscrição");


    }


}