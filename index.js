const express = require('express')
const app = express();
const Router = require('./router/router')
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.listen(PORT,() =>{
    console.log(`Servidor rodando na porta ${PORT}`);
})

app.use('/usuario', Router);


module.exports = app