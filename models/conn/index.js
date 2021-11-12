const mongoose = require("mongoose");



async function Conn(){
    await mongoose.connect("mongodb+srv://cegalvao:eduardo1992@cluster0.qjnqk.mongodb.net/Projeto?retryWrites=true&w=majority").then(() => {
        console.log("MongoDB esta conectado");
    }).catch((err) => {
        console.error(err);
    });
}

module.exports = Conn;