const Avaltreino = require("../models/avaltreino");



exports.salvar=async(req,res)=>{


await Avaltreino.create({

    TreinoId:req.body.treinoId,

    InscricaoTreinoId:req.body.inscricaoId,

    presenca:true,

    desempenho:req.body.desempenho,

    observacao:req.body.observacao

});


res.redirect("/");


}