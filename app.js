const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');

const {
    createUser,
    listarUsuarios,
    buscarUsuario,
    atualizarUsuario,
    deletarUsuario
} = require('./controllers/usuarios.js')
/* app.get("/", (req, res) => {
    res.send('Bem vindo a minha aplocação Node.js com Express')
}); */

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.post('/usuarios', createUser);
app.get('/usuarios', listarUsuarios);
app.get('/usuarios/:id', buscarUsuario);
app.put('/usuarios/:id', atualizarUsuario);
app.delete('/usuarios/:id', deletarUsuario);


app.listen(PORT,() =>{
    console.log(`Servidor rodando na porta ${PORT}`);
})