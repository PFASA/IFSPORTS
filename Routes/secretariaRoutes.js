
const express = require("express");

const router = express.Router();

const professorController = require("../Controllers/professorController");


router.get(
    "/modalidades",
    professorController.minhasModalidades
);


module.exports = router;