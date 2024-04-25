const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');

const {
    createUser,
    listUser,
    searchUserById,
    updateUser,
    deletarUsuario
} = require('./controllers/usuarios.js')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.listen(PORT,() =>{
    console.log(`Servidor rodando na porta ${PORT}`);
})

app.post('/usuarios', createUser);
app.get('/usuarios', listUser);
app.get('/usuarios/:id', searchUserById);
app.put('/usuarios/:id', updateUser);
app.delete('/usuarios/:id', deletarUsuario);

