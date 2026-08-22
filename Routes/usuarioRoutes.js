const express = require("express");
const router = express.Router();
const { Usuario } = require("../Models/associations");

// 1. Rota para exibir a página de login (GET)
router.get("/login", (req, res) => {
    // Se o usuário já estiver logado, redireciona direto para sua área
    if (req.session && req.session.usuario) {
        return redirecionarPorPerfil(req.session.usuario.tipo, res);
    }
    res.render("login", { erro: null });
});

// 2. Rota para processar os dados do formulário de login (POST)
router.post("/login", async (req, res) => {
    try {
        const { email, senha } = req.body;

        const usuario = await Usuario.findOne({ where: { email, senha } });

        if (!usuario) {
            return res.render("login", { erro: "E-mail ou senha inválidos." });
        }

        // Salva os dados essenciais na sessão
        req.session.usuario = {
            id: usuario.id,
            nome: usuario.nome,
            tipo: usuario.tipo // "aluno", "professor" ou "secretaria"
        };

        return redirecionarPorPerfil(usuario.tipo, res);
    } catch (error) {
        console.error("Erro no login:", error);
        res.status(500).render("login", { erro: "Ocorreu um erro ao tentar entrar." });
    }
});

// 3. Rota de Logout (Sair)
router.get("/logout", (req, res) => {
    req.session.destroy(() => {
        res.redirect("/login");
    });
});

// Função auxiliar de redirecionamento
function redirecionarPorPerfil(tipo, res) {
    if (tipo === "aluno") return res.redirect("/aluno/dashboard");
    if (tipo === "professor") return res.redirect("/professor/painel");
    if (tipo === "secretaria") return res.redirect("/secretaria/gerenciar");
    return res.redirect("/");
}

module.exports = router;