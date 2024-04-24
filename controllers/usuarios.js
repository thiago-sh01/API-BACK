function criarUsuario(req, res) {
    

    
    res.send('Criar usuário');
}

function listarUsuarios(req, res) {
    
    res.send('Listar usuário');
}

function buscarUsuario(req, res) {
    
    res.send('Buscar usuário pelo ID');
}

function atualizarUsuario(req, res) {
    
    res.send('Atualizar usuário pelo ID');
}

function deletarUsuario(req, res) {
    
    res.send('Deletar usuário pelo ID');
}


module.exports = {
  criarUsuario,
  listarUsuarios,
  buscarUsuario,
  atualizarUsuario,
  deletarUsuario
}