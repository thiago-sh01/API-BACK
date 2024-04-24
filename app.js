const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const {
    criarUsuario,
    listarUsuarios,
    buscarUsuario,
    atualizarUsuario,
    deletarUsuario
} = './controllers/usuarios.js'
app.get("/", (req, res) => {
    res.send('Bem vindo a minha aplocação Node.js com Express')
});


app.post('/usuarios', criarUsuario);
app.get('/usuarios', listarUsuarios);
app.get('/usuarios/:id', buscarUsuario);
app.put('/usuarios/:id', atualizarUsuario);
app.delete('/usuarios/:id', deletarUsuario);


app.listen(PORT,() =>{
    console.log(`Servidor rodando na porta ${PORT}`);
})