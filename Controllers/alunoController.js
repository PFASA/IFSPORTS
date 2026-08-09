const Aluno = require("../Models/aluno");

exports.home = async(req,res)=>{

    const aluno = await Aluno.findAll();
   

    res.render("index",{

        aluno,
       
    });

}
exports.salvar = async(req,res)=>{

    await Aluno.create({

        nome:req.body.nome,
        idade:req.body.idade,
        email:req.body.email,
        senha:req.body.senha,
        curso:req.body.curso


    });

    res.redirect("/");

}