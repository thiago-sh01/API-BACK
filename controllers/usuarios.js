const { User } = require("../models/createUser");

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

function listarUsuarios(req, res) {
  res.send("Listar usuário");
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
  listarUsuarios,
  buscarUsuario,
  atualizarUsuario,
  deletarUsuario,
};
