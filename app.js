const express = require("express");
const path = require("path");

const app = express();

const usuarioRoutes = require("./Routes/usuarioRoutes");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "Views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "Static")));

app.use("/", usuarioRoutes);

app.listen(3000, () => {
    console.log("Servidor rodando em: http://localhost:3000/");
});