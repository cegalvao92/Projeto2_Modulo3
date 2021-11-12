const express = require("express");
const app = express();
app.use(express.json()); 
const Conn = require("./models/conn/index");
Conn();


const port = 3000; 


const cidadesRouter = require("./routers/cidades.routes");

const estadosRouter = require("./routers/estados.routes");

const paisesRouter = require("./routers/paises.routes");

app.use('/cidades',cidadesRouter);
app.use('/estados',estadosRouter);
app.use('/paises',paisesRouter);

app.listen(port, () => {
    console.log(`Servidor rodando em: http://localhost:${port}`);
});



