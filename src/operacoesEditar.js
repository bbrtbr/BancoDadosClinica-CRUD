const connection = require("./conexao");

//Para facilitar, foi criado a const novosDados que armazena um objeto

function editarPessoa(cpf, novosDados) {
  const sql = "UPDATE pessoa SET ? WHERE cpf = ?";
  connection.query(sql, [novosDados, cpf], (error, results, fields) => {
    if (error) {
      console.error("Erro ao editar pessoa:", error);
      return;
    }
    console.log("Pessoa editada com sucesso.");
  });
}

function editarMedico(id_medico, novosDados) {
  const sql = "UPDATE medico SET ? WHERE idMedico = ?";
  connection.query(sql, [novosDados, id_medico], (error, results, fields) => {
    if (error) {
      console.error("Erro ao editar médico:", error);
      return;
    }
    console.log("Médico editado com sucesso.");
  });
}

function editarPaciente(id_paciente, novosDados) {
  const sql = "UPDATE paciente SET ? WHERE idPaciente = ?";
  connection.query(sql, [novosDados, id_paciente], (error, results, fields) => {
    if (error) {
      console.error("Erro ao editar paciente:", error);
      return;
    }
    console.log("Paciente editado com sucesso.");
  });
}

function editarEspecialidade(id_especialidade, novosDados) {
  const sql = "UPDATE especialidade SET ? WHERE id_especialidade = ?";
  connection.query(sql, [novosDados, id_especialidade], (error, results, fields) => {
    if (error) {
      console.error("Erro ao editar especialidade:", error);
      return;
    }
    console.log("Especialidade editada com sucesso.");
  });
}

function editarEndereco(id_endereco, novosDados) {
  const sql = "UPDATE endereco SET ? WHERE id_endereco = ?";
  connection.query(sql, [novosDados, id_endereco], (error, results, fields) => {
    if (error) {
      console.error("Erro ao editar endereço:", error);
      return;
    }
    console.log("Endereço editado com sucesso.");
  });
}

function editarConvenio(id_convenio, novosDados) {
  const sql = "UPDATE convenio SET ? WHERE id_convenio = ?";
  connection.query(sql, [novosDados, id_convenio], (error, results, fields) => {
    if (error) {
      console.error("Erro ao editar convênio:", error);
      return;
    }
    console.log("Convênio editado com sucesso.");
  });
}

function editarConsulta(id_consulta, novosDados) {
  const sql = "UPDATE consulta SET ? WHERE idConsulta = ?";
  connection.query(sql, [novosDados, id_consulta], (error, results, fields) => {
    if (error) {
      console.error("Erro ao editar consulta:", error);
      return;
    }
    console.log("Consulta editada com sucesso.");
  });
}

function editarReceita(id_receita, novosDados) {
  const sql = "UPDATE receita SET ? WHERE idReceita = ?";
  connection.query(sql, [novosDados, id_receita], (error, results, fields) => {
    if (error) {
      console.error("Erro ao editar receita:", error);
      return;
    }
    console.log("Receita editada com sucesso.");
  });
}

module.exports = {
    editarPessoa,
    editarMedico,
    editarPaciente,
    editarEspecialidade,
    editarEndereco,
    editarConvenio,
    editarConsulta,
    editarReceita
};

connection.end();
