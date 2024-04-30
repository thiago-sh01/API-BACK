const User = require("../models/User");
const bcrypt = require("bcrypt");

async function createUser(req, res) {
  try {
    const { name, email, idade, senha } = req.body;

    const usuarioExistente = await User.findOne({ where: { email } });
    if (usuarioExistente) {
      return req.status(400).json({ error: "Email já registrado" });
    }

    const hasedPassword = await bcrypt.hash(senha, 10);

    const novoUsuario = await User.create({
      name,
      email,
      idade,
      senha: hasedPassword,
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

async function searchUserById(req, res) {
  try {
    const { id } = req.params;
    const usuario = await User.findByPk(id);

    if (!usuario) {
      return res.status(400).json({ error: "Usuário não encontrado" });
    }

    res.status(200).json(usuario);
  } catch (error) {
    console.error("Erro ao buscar usuário por ID", error);
    res.status(500).json({ error: "Erro interno no Servidor" });
  }
}

async function updateUserById(req, res) {
  try {
    const { id } = req.params;
    const { name, email, idade, senha } = req.body;
    const existente = await User.findByPk(id);
    
    let usuarioExistente = await User.findByPk(id)

    if (!existente) {
      return res.status(400).json({ error: "Usuário não encontrado" });
    }

    usuarioExistente.name = name;
    usuarioExistente.email = email;
    usuarioExistente.idade = idade;

    if (senha) {
      const hashedPassword = await bcrypt.hash(senha, 10);
      usuarioExistente.senha = hashedPassword;
    }

    await usuarioExistente.save();

    res.status(200).json(usuarioExistente);
  } catch (error) {
    console.error("Erro ao atualizar Usuário", error);
    res.status(500).json({ error: "Erro interno no Servidor" });
  }
}

async function deleteUserById(req, res) {
  try {
    const { id } = req.params;

    const existente = await User.findByPk(id);
    if (!existente) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }
    await User.destroy({
      where: {
        id,
      },
    });

    res.status(200).json({ message: "Usuário excluído com sucesso" });
  } catch (error) {
    console.error("Erro ao excluir usuário", error);
    res.status(500).json({ error: "Erro interno no Servidor" });
  }
}

module.exports = {
  createUser,
  listUser,
  searchUserById,
  updateUserById,
  deleteUserById,
};
