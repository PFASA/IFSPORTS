const express = require("express");

const router = express.Router();

const alunoController = require("../Controllers/alunoController");

router.get("/", alunoController.home);

router.post("/salvar",alunoController.salvar);

module.exports = router;