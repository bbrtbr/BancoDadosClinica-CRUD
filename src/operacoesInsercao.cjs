const connection = require("./conexao");

//Com biblioteca seria mais facil, mas creio que o professor prefira assim para treinarmos os comandos

function inserirPessoa(cpf, nome, data_nascimento, email) {
  const sql =
    "INSERT INTO pessoa (cpf, nome, data_nascimento, email) VALUES (?, ?, ?, ?)";
  const values = [cpf, nome, data_nascimento, email];
  connection.query(sql, values, (error, results, fields) => {
    if (error) {
      console.error("Erro ao inserir pessoa:", error);
      return;
    }
    console.log("Pessoa inserida com sucesso.");
  });
}
function inserirMedico(cpf, crm, salario) {
  const sql = "INSERT INTO medico (id_pessoa, crm, salario) VALUES (?, ?, ?)";
  const values = [cpf, crm, salario];
  connection.query(sql, values, (error, results, fields) => {
    if (error) {
      console.error("Erro ao inserir medico:", error);
      return;
    }
    return results.insertId
    console.log("Medico inserido com sucesso.");
  });
}
function inserirPaciente(cpf, saldo, observacoes, id_convenio) {
  const sql =
    "INSERT INTO paciente (id_pessoa, saldo, observacoes, id_convenio) VALUES (?, ?, ?,?)";
  const values = [cpf, saldo, observacoes, id_convenio];
  connection.query(sql, values, (error, results, fields) => {
    if (error) {
      console.error("Erro ao inserir paciente:", error);
      return;
    }
    console.log("Paciente inserido com sucesso.");
  });
}

function inserirEspecialidade(nomeEspecialidade, idMedico) {
  const sql =
    "INSERT INTO especialidade (nome_especialidade, id_medico) VALUES (?, ?)";
  const values = [nomeEspecialidade, idMedico];
  connection.query(sql, values, (error, results, fields) => {
    if (error) {
      console.error("Erro ao inserir especialidade:", error);
      return;
    }
    console.log("Especialidade inserida com sucesso.");
  });
}

function inserirEndereco(cpf, logradouro, bairro, municipio, estado) {
  const sql =
    "INSERT INTO endereco (id_pessoa, logradouro, bairro, municipio, estado) VALUES (?, ?, ?, ?, ?)";
  const values = [cpf, logradouro, bairro, municipio, estado];
  connection.query(sql, values, (error, results, fields) => {
    if (error) {
      console.error("Erro ao inserir endereço:", error);
      return;
    }
    console.log("Endereço inserido.");
  });
}

function inserirConvenio(nome_convenio, cnpj_convenio) {
  const sql =
    "INSERT INTO convenio (nome_convenio, cnpj_convenio) VALUES (?, ?)";
  const values = [nome_convenio, cnpj_convenio];
  connection.query(sql, values, (error, results, fields) => {
    if (error) {
      console.error("Erro ao inserir convenio:", error);
      return;
    }
    console.log("Convenio inserido.");
  });
}

function inserirConsulta(
  id_medico,
  id_paciente,
  data_consulta,
  valor_consulta,
  status
) {
  const sql =
    "INSERT INTO consulta (id_medico, id_paciente, data_consulta, valor_consulta, status) VALUES (?, ?,?,?,?)";
  const values = [
    id_medico,
    id_paciente,
    data_consulta,
    valor_consulta,
    status,
  ];
  connection.query(sql, values, (error, results, fields) => {
    if (error) {
      console.error("Erro ao inserir consulta:", error);
      return;
    }
    const consultaId = results.insertId; // Obtém o ID da consulta recém-inserida
    console.log("Consulta inserida com ID:", consultaId);
    callback(null, consultaId);
  });
}
function inserirReceita(id_consulta, medicamento, instrucao_uso) {
  const sql =
    "INSERT INTO receita (id_consulta, medicamento, instrucao_uso) VALUES (?, ?,?)";
  const values = [id_consulta, medicamento, instrucao_uso];
  connection.query(sql, values, (error, results, fields) => {
    if (error) {
      console.error("Erro ao inserir receita:", error);
      return;
    }
    console.log("Receita inserida.");
  });
}

function inserirDoenca(nome, descricao, tratamento) {
  const sql =
    "INSERT INTO doenca (nome, descricao, tratamento) VALUES (?, ?,?)";
  const values = [nome, descricao, tratamento];
  connection.query(sql, values, (error, results, fields) => {
    if (error) {
      console.error("Erro ao inserir doenca:", error);
      return;
    }
    console.log("Doenca inserida.");
  });
}
function inserirRelacaoDoencaConsulta(id_doenca, id_consulta) {
  const sql =
    "INSERT INTO doencaconsulta (id_doenca, id_consulta) VALUES (?, ?)";
  const values = [id_doenca, id_consulta];
  connection.query(sql, values, (error, results, fields) => {
    if (error) {
      console.error("Erro ao inserir relacao", error);
      return;
    }
    console.log("Relação inserida.");
  });
}
function encerrarConexao(){
  connection.end()
}

module.exports = {
  inserirPessoa,
  inserirMedico,
  inserirPaciente,
  inserirEspecialidade,
  inserirEndereco,
  inserirConvenio,
  inserirConsulta,
  inserirReceita,
  inserirDoenca,
  inserirRelacaoDoencaConsulta,
  encerrarConexao
};

