// Middlewares/auth.js

// Verifica se o usuário está logado
function estaAutenticado(req, res, next) {
    if (req.session && req.session.usuario) {
        return next();
    }
    return res.redirect("/login");
}

// Verifica o tipo/perfil de usuário
function permitirApenas(...perfisPermitidos) {
    return (req, res, next) => {
        if (!req.session || !req.session.usuario) {
            return res.redirect("/login");
        }

        const perfilUsuario = req.session.usuario.tipo; // ex: "aluno", "professor" ou "secretaria"

        if (perfisPermitidos.includes(perfilUsuario)) {
            return next();
        }

        return res.status(403).render("erro", { 
            mensagem: "Acesso negado: você não tem permissão para acessar esta área." 
        });
    };
}

module.exports = {
    estaAutenticado,
    permitirApenas
};