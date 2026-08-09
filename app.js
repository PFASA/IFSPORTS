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


// Inicializa servidor
app.listen(3000,()=>{
    console.log("Servidor rodando na porta 3000");
});