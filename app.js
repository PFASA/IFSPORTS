const express = require("express");
const path = require("path");

const app = express();

const usuarioRoutes = require("./Routes/usuarioRoutes");
const sequelize = require("./Database/database");


// Carrega as associações
require("./Models/associations");


// Sincroniza o banco de dados
sequelize.sync({ alter:true })
.then(()=>{
    console.log("Banco sincronizado!");
})
.catch((erro)=>{
    console.log(erro);
});


// Configuração do EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "Views"));


// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Arquivos estáticos
app.use(express.static(path.join(__dirname, "Static")));


// Rotas
app.use("/", usuarioRoutes);
app.use("/login", usuarioRoutes);
app.use("/Dashbord", usuarioRoutes);
app.use("/modalidades", usuarioRoutes);
app.use("/minhasModalidades", usuarioRoutes);
app.use("/MeusTreinos", usuarioRoutes);
app.use("/DesempenhoTreino", usuarioRoutes);
app.use("/HistoriTreino", usuarioRoutes);
// RotaProfessor
app.use("/Dashbord", usuarioRoutes);
app.use("/MinhasModalidades", usuarioRoutes);
app.use("/MeusAlunos", usuarioRoutes);
app.use("/CriarTreinos", usuarioRoutes);
app.use("/CadastrarAluno", usuarioRoutes);
app.use("/AvaliarTreino", usuarioRoutes);
app.use("/RankingModalidade", usuarioRoutes);
app.use("/HistoricoTreinoAluno/<int:id>", usuarioRoutes);
app.use("/EnviarAviso", usuarioRoutes);
// RotasSecretaria
app.use("/", usuarioRoutes);
app.use("/", usuarioRoutes);
app.use("/", usuarioRoutes);
app.use("/", usuarioRoutes);



// Inicializa servidor
app.listen(3000,()=>{
    console.log("Servidor rodando na porta 3000");
});