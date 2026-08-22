const express = require("express");
const path = require("path");
const session = require("express-session");

const sequelize = require("./Database/database");
const models = require("./Models/associations");

const usuarioRoutes = require("./Routes/usuarioRoutes");
const alunoRoutes = require("./Routes/alunoRoutes");
const professorRoutes = require("./Routes/professorRoutes");
const secretariaRoutes = require("./Routes/secretariaRoutes");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "Views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "Static")));

app.use(
    session({
        secret: "ifsports",
        resave: false,
        saveUninitialized: false,
        cookie: { maxAge: 1000 * 60 * 60 * 24 }
    })
);

// Disponibiliza os dados da sessão globalmente para os templates EJS
app.use((req, res, next) => {
    res.locals.usuarioLogado = req.session.usuario || null;
    next();
});

// Rotas públicas e de autenticação
app.use("/", usuarioRoutes);

// Rotas privadas por perfil
app.use("/aluno", alunoRoutes);
app.use("/professor", professorRoutes);
app.use("/secretaria", secretariaRoutes);

// Tratamento de páginas não encontradas
app.use((req, res) => {
    res.status(404).send("Página não encontrada (404)");
});

sequelize
    .sync({ alter: true })
    .then(() => {
        console.log("Banco de dados sincronizado.");
        app.listen(PORT, () => {
            console.log(`Servidor rodando em: http://localhost:${PORT}/`);
        });
    })
    .catch((err) => {
        console.error("Erro ao sincronizar banco:", err);
    });