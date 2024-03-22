const connection = require("./conexao");

function buscarPessoaPorCPF(cpf, callback) {
  const sql = "SELECT * FROM pessoa WHERE cpf = ?";
  connection.query(sql, cpf, (error, results, fields) => {
    if (error) {
      console.error("Erro ao buscar pessoa:", error);
      callback(error, null);
      return;
    }
    callback(null, results);
  });
}

function buscarMedicoPorCPF(cpf, callback) {
  const sql = "SELECT * FROM medico WHERE id_pessoa = ?";
  connection.query(sql, cpf, (error, results, fields) => {
    if (error) {
      console.error("Erro ao buscar médico:", error);
      callback(error, null);
      return;
    }
    callback(null, results);
  });
}

function buscarPacientePorCPF(cpf, callback) {
  const sql = "SELECT * FROM paciente WHERE id_pessoa = ?";
  connection.query(sql, cpf, (error, results, fields) => {
    if (error) {
      console.error("Erro ao buscar paciente:", error);
      callback(error, null);
      return;
    }
    callback(null, results);
  });
}

function buscarEspecialidadesDoMedico(idMedico, callback) {
  const sql =
    "SELECT * FROM especialidade WHERE id_medico = ?";
  connection.query(sql, idMedico, (error, results, fields) => {
    if (error) {
      console.error("Erro ao buscar especialidades do médico:", error);
      callback(error, null);
      return;
    }
    callback(null, results);
  });
}

function buscarEnderecoPorCPF(cpf, callback) {
  const sql = "SELECT * FROM endereco WHERE id_pessoa = ?";
  connection.query(sql, cpf, (error, results, fields) => {
    if (error) {
      console.error("Erro ao buscar endereço:", error);
      callback(error, null);
      return;
    }
    callback(null, results);
  });
}

function buscarConvenioPorNome(nomeConvenio, callback) {
  const sql = "SELECT * FROM convenio WHERE nome_convenio = ?";
  connection.query(sql, nomeConvenio, (error, results, fields) => {
    if (error) {
      console.error("Erro ao buscar convênio:", error);
      callback(error, null);
      return;
    }
    callback(null, results);
  });
}

function buscarConsultasPorMedico(idMedico, callback) {
  const sql = "SELECT * FROM consulta WHERE id_medico = ?";
  connection.query(sql, idMedico, (error, results, fields) => {
    if (error) {
      console.error("Erro ao buscar consultas do médico:", error);
      callback(error, null);
      return;
    }
    callback(null, results);
  });
}

function buscarReceitasPorConsulta(idConsulta, callback) {
  const sql = "SELECT * FROM receita WHERE id_consulta = ?";
  connection.query(sql, idConsulta, (error, results, fields) => {
    if (error) {
      console.error("Erro ao buscar receitas da consulta:", error);
      callback(error, null);
      return;
    }
    callback(null, results);
  });
}

function buscarDoencasPorConsulta(idConsulta, callback) {
  const sql = "SELECT * FROM doencaconsulta WHERE id_consulta = ?";
  connection.query(sql, idConsulta, (error, results, fields) => {
    if (error) {
      console.error("Erro ao buscar doenças da consulta:", error);
      callback(error, null);
      return;
    }
    callback(null, results);
  });
}
function buscarMedicoComEspecialidades(cpf, callback) { // Consulta aninhada
    const sql = `
      SELECT m.*, e.nome_especialidade
      FROM medico m
      INNER JOIN especialidade e ON m.id_medico = e.id_medico
      WHERE m.id_pessoa = ?
    `;
    connection.query(sql, cpf, (error, results, fields) => {
      if (error) {
        console.error("Erro ao buscar médico com especialidades:", error);
        callback(error, null);
        return;
      }
      callback(null, results);
    });
  }
  
  function buscarConsultasPorMedicoEspecialidade(nomeEspecialidade, callback) { // Consulta aninhada
    const sql = `
      SELECT c.*
      FROM consulta c
      WHERE c.id_medico IN (
        SELECT m.id_medico
        FROM medico m
        INNER JOIN especialidade e ON m.id_medico = e.id_medico
        WHERE e.nome_especialidade = ?
      )
    `;
    connection.query(sql, nomeEspecialidade, (error, results, fields) => {
      if (error) {
        console.error("Erro ao buscar consultas por médico e especialidade:", error);
        callback(error, null);
        return;
      }
      callback(null, results);
    });
  }

function encerrarConexao(){
  connection.end()
}

module.exports = {
  buscarPessoaPorCPF,
  buscarMedicoPorCPF,
  buscarPacientePorCPF,
  buscarEspecialidadesDoMedico,
  buscarEnderecoPorCPF,
  buscarConvenioPorNome,
  buscarConsultasPorMedico,
  buscarReceitasPorConsulta,
  buscarDoencasPorConsulta,
  encerrarConexao,
  buscarMedicoComEspecialidades,
  buscarConsultasPorMedicoEspecialidade
};
