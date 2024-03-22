const funcoes = require("./src/operacoesInsercao.cjs");

for (let i = 0; i < 8; i++) {
  funcoes.inserirConvenio("a", "b");
}
for (let i = 0; i < 10; i++) {
  const cpf = gerarCPF();
  const nome = gerarNome();
  const dataNascimento = gerarDataNascimento();
  const email = gerarEmail(nome);
  const saldo = gerarSaldo();
  const observacoes = gerarObservacoes();
  const idConvenio = gerarIdConvenio();
  funcoes.inserirPessoa(cpf, nome, dataNascimento, email);
  funcoes.inserirEndereco(
    cpf,
    gerarLogradouro(),
    gerarBairro(),
    gerarMunicipio(),
    gerarEstado()
  );
  funcoes.inserirPaciente(cpf, saldo, observacoes, idConvenio);
}

// Inserir 10 médicos
for (let i = 0; i < 10; i++) {
  const cpf = gerarCPF();
  const nome = gerarNome();
  const dataNascimento = gerarDataNascimento();
  const email = gerarEmail(nome);
  const crm = gerarCRM();
  const salario = Math.floor(Math.random() * 5000) + 5000; // Entre 5000 e 10000
  funcoes.inserirPessoa(cpf, nome, dataNascimento, email);
  funcoes.inserirEndereco(
    cpf,
    gerarLogradouro(),
    gerarBairro(),
    gerarMunicipio(),
    gerarEstado()
  );
  const idMedico = funcoes.inserirMedico(cpf, crm, salario);
  funcoes.inserirEspecialidade(gerarNomeEspecialidade(), idMedico);
}

// Criar 10 registros para os demais registros
for (let i = 0; i < 10; i++) {
  const idMedico = Math.floor(Math.random() * 10) + 1; // IDs de médico de 1 a 10
  const idPaciente = Math.floor(Math.random() * 10) + 1; // IDs de paciente de 1 a 10
  const dataConsulta = gerarDataConsulta();
  const valorConsulta = gerarValorConsulta();
  const status = gerarStatusConsulta();


  inserirConsultaPromise(
 
  )
    .then((idConsulta) => {
      console.log("Consulta inserida com ID:", idConsulta);
   
      funcoes.inserirReceita(
        idConsulta,
        gerarMedicamento(),
        gerarInstrucaoUso()
      );
      funcoes.inserirDoenca(
        gerarNomeDoenca(),
        gerarDescricaoDoenca(),
        gerarTratamentoDoenca()
      );
      funcoes.inserirRelacaoDoencaConsulta(
        Math.floor(Math.random() * 5) + 1,
        i + 1
      );
    })
    .catch((error) => {
      console.error("Erro ao inserir consulta:", error);
    });
}


function inserirConsultaPromise(
  idMedico,
  idPaciente,
  dataConsulta,
  valorConsulta,
  status
) {
  return new Promise((resolve, reject) => {
    funcoes.inserirConsulta(
      idMedico,
      idPaciente,
      dataConsulta,
      valorConsulta,
      status,
      (error, idConsulta) => {
        if (error) {
          reject(error);
        } else {
          resolve(idConsulta);
        }
      }
    );
  });
}

// Função para gerar CPF aleatório
function gerarCPF() {
  let cpf = "";
  for (let i = 0; i < 11; i++) {
    cpf += Math.floor(Math.random() * 10);
  }
  return cpf;
}

// Função para gerar nome aleatório
function gerarNome() {
  const nomes = [
    "Maria",
    "João",
    "Ana",
    "Pedro",
    "Carla",
    "Marcos",
    "Lúcia",
    "Fernando",
    "Camila",
    "Rafael",
  ];
  return nomes[Math.floor(Math.random() * nomes.length)];
}

// Função para gerar data de nascimento aleatória (entre 1950 e 2005)
function gerarDataNascimento() {
  const ano = Math.floor(Math.random() * (2005 - 1950) + 1950);
  const mes = Math.floor(Math.random() * 12) + 1;
  const dia = Math.floor(Math.random() * 28) + 1; // Assumindo todos os meses com até 28 dias
  return `${ano}-${mes}-${dia}`;
}

// Função para gerar email aleatório
function gerarEmail(nome) {
  const dominios = ["gmail.com", "hotmail.com", "yahoo.com", "outlook.com"];
  const nomeFormatado = nome.toLowerCase().replace(/\s+/g, "");
  return `${nomeFormatado}@${
    dominios[Math.floor(Math.random() * dominios.length)]
  }`;
}

// Função para gerar CRM aleatório
function gerarCRM() {
  let crm = "";
  for (let i = 0; i < 6; i++) {
    crm += Math.floor(Math.random() * 10);
  }
  return crm;
}

// Função para gerar saldo aleatório para pacientes
function gerarSaldo() {
  return Math.floor(Math.random() * 5000) + 1000; // Entre 1000 e 6000
}

// Função para gerar observações aleatórias para pacientes
function gerarObservacoes() {
  const observacoes = [
    "Sem observações",
    "Alergia a determinado medicamento",
    "Diabetes tipo 2",
    "Hipertensão arterial",
    "Colesterol alto",
  ];
  return observacoes[Math.floor(Math.random() * observacoes.length)];
}

// Função para gerar ID de convênio aleatório
function gerarIdConvenio() {
  return Math.floor(Math.random() * 5) + 1; // Assumindo IDs de convênio de 1 a 5
}

// Função para gerar logradouro aleatório
function gerarLogradouro() {
  const logradouros = [
    "Rua A",
    "Rua B",
    "Avenida C",
    "Avenida D",
    "Travessa E",
  ];
  return logradouros[Math.floor(Math.random() * logradouros.length)];
}

// Função para gerar bairro aleatório
function gerarBairro() {
  const bairros = [
    "Centro",
    "Bairro Novo",
    "Jardim",
    "Boa Vista",
    "Vila São José",
  ];
  return bairros[Math.floor(Math.random() * bairros.length)];
}

// Função para gerar município aleatório
function gerarMunicipio() {
  const municipios = [
    "São Paulo",
    "Rio de Janeiro",
    "Belo Horizonte",
    "Salvador",
    "Brasília",
  ];
  return municipios[Math.floor(Math.random() * municipios.length)];
}

// Função para gerar estado aleatório
function gerarEstado() {
  const estados = ["SP", "RJ", "MG", "BA", "DF"];
  return estados[Math.floor(Math.random() * estados.length)];
}

// Função para gerar nome de especialidade aleatório
function gerarNomeEspecialidade() {
  const especialidades = [
    "Cardiologia",
    "Pediatria",
    "Ginecologia",
    "Ortopedia",
    "Dermatologia",
  ];
  return especialidades[Math.floor(Math.random() * especialidades.length)];
}

// Função para gerar data de consulta aleatória (entre 2022 e 2024)
function gerarDataConsulta() {
  const ano = Math.floor(Math.random() * (2024 - 2022) + 2022);
  const mes = Math.floor(Math.random() * 12) + 1;
  const dia = Math.floor(Math.random() * 28) + 1; // Assumindo todos os meses com até 28 dias
  return `${ano}-${mes}-${dia}`;
}

// Função para gerar valor de consulta aleatório
function gerarValorConsulta() {
  return Math.floor(Math.random() * 300) + 50; // Entre 50 e 350
}

// Função para gerar status aleatório para a consulta
function gerarStatusConsulta() {
  const status = ["Agendada", "Confirmada", "Realizada", "Cancelada"];
  return status[Math.floor(Math.random() * status.length)];
}

// Função para gerar medicamento aleatório
function gerarMedicamento() {
  const medicamentos = [
    "Paracetamol",
    "Dipirona",
    "Amoxicilina",
    "Ibuprofeno",
    "Omeprazol",
  ];
  return medicamentos[Math.floor(Math.random() * medicamentos.length)];
}

// Função para gerar instrução de uso aleatória
function gerarInstrucaoUso() {
  const instrucoes = [
    "Tomar 1 comprimido a cada 6 horas",
    "Tomar 2 comprimidos pela manhã",
    "Tomar 1 comprimido antes das refeições",
    "Tomar conforme orientação médica",
  ];
  return instrucoes[Math.floor(Math.random() * instrucoes.length)];
}

// Função para gerar nome de doença aleatório
function gerarNomeDoenca() {
  const doencas = ["Gripe", "Dengue", "Hepatite", "Pneumonia", "Covid-19"];
  return doencas[Math.floor(Math.random() * doencas.length)];
}

// Função para gerar descrição de doença aleatória
function gerarDescricaoDoenca() {
  const descricoes = [
    "Infecção viral comum",
    "Transmitida por mosquito",
    "Inflamação no fígado",
    "Infecção pulmonar",
    "Causada pelo coronavírus",
  ];
  return descricoes[Math.floor(Math.random() * descricoes.length)];
}

// Função para gerar tratamento de doença aleatório
function gerarTratamentoDoenca() {
  const tratamentos = [
    "Repouso",
    "Hidratação",
    "Medicação específica",
    "Antibióticos",
    "Isolamento",
  ];
  return tratamentos[Math.floor(Math.random() * tratamentos.length)];
}
funcoes.encerrarConexao();
