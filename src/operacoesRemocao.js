const connection = require("./conexao");

function removerPessoa(cpf) {
  const sql = "DELETE FROM pessoa WHERE cpf = ?";
  connection.query(sql, cpf, (error, results, fields) => {
    if (error) {
      console.error("Erro ao remover pessoa:", error);
      return;
    }
    console.log("Pessoa removida com sucesso.");
  });
}

function removerMedico(id_medico) {
  const sql = "DELETE FROM medico WHERE idMedico = ?";
  connection.query(sql, id_medico, (error, results, fields) => {
    if (error) {
      console.error("Erro ao remover médico:", error);
      return;
    }
    console.log("Médico removido com sucesso.");
  });
}

function removerPaciente(id_paciente) {
  const sql = "DELETE FROM paciente WHERE idPaciente = ?";
  connection.query(sql, id_paciente, (error, results, fields) => {
    if (error) {
      console.error("Erro ao remover paciente:", error);
      return;
    }
    console.log("Paciente removido com sucesso.");
  });
}

function removerEspecialidade(id_especialidade) {
  const sql = "DELETE FROM especialidade WHERE id_especialidade = ?";
  connection.query(sql, id_especialidade, (error, results, fields) => {
    if (error) {
      console.error("Erro ao remover especialidade:", error);
      return;
    }
    console.log("Especialidade removida com sucesso.");
  });
}

function removerEndereco(id_endereco) {
  const sql = "DELETE FROM endereco WHERE id_endereco = ?";
  connection.query(sql, id_endereco, (error, results, fields) => {
    if (error) {
      console.error("Erro ao remover endereço:", error);
      return;
    }
    console.log("Endereço removido com sucesso.");
  });
}

function removerConvenio(id_convenio) {
  const sql = "DELETE FROM convenio WHERE id_convenio = ?";
  connection.query(sql, id_convenio, (error, results, fields) => {
    if (error) {
      console.error("Erro ao remover convênio:", error);
      return;
    }
    console.log("Convênio removido com sucesso.");
  });
}

function removerConsulta(id_consulta) {
  const sql = "DELETE FROM consulta WHERE idConsulta = ?";
  connection.query(sql, id_consulta, (error, results, fields) => {
    if (error) {
      console.error("Erro ao remover consulta:", error);
      return;
    }
    console.log("Consulta removida com sucesso.");
  });
}

function removerReceita(id_receita) {
  const sql = "DELETE FROM receita WHERE idReceita = ?";
  connection.query(sql, id_receita, (error, results, fields) => {
    if (error) {
      console.error("Erro ao remover receita:", error);
      return;
    }
    console.log("Receita removida com sucesso.");
  });
}
module.exports = {
    removerPessoa,
    removerMedico,
    removerPaciente,
    removerEspecialidade,
    removerEndereco,
    removerConvenio,
    removerConsulta,
    removerReceita
  };
connection.end();
