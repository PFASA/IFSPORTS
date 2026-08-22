const express = require("express");

const router = express.Router();

const alunoController = require("../Controllers/alunoController");


router.get("/", alunoController.home);

router.post("/salvar", alunoController.salvar);

router.get("/Dashbord", alunoController.dashbord);

router.get("/Modalidades", alunoController.modalidades);

router.get("/MeuDesempenho", alunoController.meuDesempenho);

router.get("/MeuPerfil", alunoController.meuPerfil);

module.exports = router;