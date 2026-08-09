const Treino = require("../models/treino");
const Modalidade = require("../models/modalidades");


// Criar treino

exports.salvar = async(req,res)=>{

    try{

        await Treino.create({

            data:req.body.data,

            horario:req.body.horario,

            conteudo:req.body.conteudo,

            ModalidadeId:req.body.modalidadeId

        });


        res.redirect("/professor/modalidades");


    }catch(error){

        console.log(error);

        res.send("Erro ao cadastrar treino");

    }

};