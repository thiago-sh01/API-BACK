const { User } = require("../models/User");

async function createUser(req, res) {
  try {
    const { name, email, idade } = req.body;

    const novoUsuario = await User.create({
      name,
      email,
      idade,
    });

    res.status(201).json(novoUsuario);
  } catch (error) {
    console.error("Erro ao criar usuário", error);
    res.status(500).json({ error: "Erro interno no Servidor" });
  }
}

async function listUser(req, res) {
  try {
    const usuarios = await User.findAll();

    res.status(200).json(usuarios);
  } catch (error) {
    console.error("Erro ao listar usuários", error);
    res.status(500).json({ error: "Erro interno no Servidor" });
  }
}

function buscarUsuario(req, res) {
  res.send("Buscar usuário pelo ID");
}

function atualizarUsuario(req, res) {
  res.send("Atualizar usuário pelo ID");
}

function deletarUsuario(req, res) {
  res.send("Deletar usuário pelo ID");
}

module.exports = {
  createUser,
  listUser,
  buscarUsuario,
  atualizarUsuario,
  deletarUsuario,
};
