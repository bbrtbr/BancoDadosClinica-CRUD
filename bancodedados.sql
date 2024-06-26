-- Comandos para criar o banco de dados
create database clinica;

use clinica;

CREATE TABLE pessoa (
    cpf VARCHAR(11) PRIMARY KEY,
    nome VARCHAR(100),
    data_nascimento DATE,
    email VARCHAR(100)
);

CREATE TABLE endereco (
    id_endereco INT AUTO_INCREMENT PRIMARY KEY,
    id_pessoa VARCHAR(11),
    logradouro VARCHAR(100),
    bairro VARCHAR(100),
    municipio VARCHAR(100),
    estado VARCHAR(50),
    FOREIGN KEY (id_pessoa) REFERENCES pessoa(cpf)
);

CREATE TABLE telefone (
    idTelefone INT AUTO_INCREMENT PRIMARY KEY,
    id_pessoa VARCHAR(11),
    numero VARCHAR(20),
    operadora VARCHAR(30),
    FOREIGN KEY (id_pessoa) REFERENCES pessoa(cpf)
);

CREATE TABLE convenio (
    id_convenio INT AUTO_INCREMENT PRIMARY KEY,
    nome_convenio VARCHAR(100),
    cnpj_convenio VARCHAR(14)
);

CREATE TABLE paciente (
    idPaciente INT AUTO_INCREMENT PRIMARY KEY,
    id_pessoa VARCHAR(11),
    saldo DECIMAL(10, 2),
    observacoes TEXT,
    id_convenio INT,
    FOREIGN KEY (id_pessoa) REFERENCES pessoa(cpf),
    FOREIGN KEY (id_convenio) REFERENCES convenio(id_convenio)
);

CREATE TABLE medico (
    idMedico INT AUTO_INCREMENT PRIMARY KEY,
    id_pessoa VARCHAR(11),
    crm VARCHAR(20),
    salario DECIMAL(10, 2),
    FOREIGN KEY (id_pessoa) REFERENCES pessoa(cpf)
);

CREATE TABLE especialidade (
    id_especialidade INT AUTO_INCREMENT PRIMARY KEY,
    nome_especialidade VARCHAR(100),
    id_medico INT,
    FOREIGN KEY (id_medico) REFERENCES medico(idMedico)
);

CREATE TABLE consulta (
    id_consulta INT AUTO_INCREMENT PRIMARY KEY,
    id_medico INT,
    id_paciente INT,
    data_consulta DATE,
    valor_consulta DECIMAL(10, 2),
    status VARCHAR(50),
    FOREIGN KEY (id_medico) REFERENCES medico(idMedico),
    FOREIGN KEY (id_paciente) REFERENCES paciente(idPaciente)
);

CREATE TABLE receita (
    idReceita INT AUTO_INCREMENT PRIMARY KEY,
    id_consulta INT,
    medicamento VARCHAR(100),
    instrucao_uso TEXT,
    FOREIGN KEY (id_consulta) REFERENCES consulta(id_consulta)
);

CREATE TABLE doenca(
    id_doenca INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    descricao TEXT,
    tratamento TEXT
);

CREATE TABLE doencaconsulta(
    id_doenca_consulta INT AUTO_INCREMENT PRIMARY KEY,
    id_doenca INT,
    id_consulta INT,
    FOREIGN KEY (id_consulta) REFERENCES consulta(id_consulta),
    FOREIGN KEY (id_doenca) REFERENCES doenca(id_doenca)
);

CREATE TABLE telefonepessoa(
    id_telefone_pessoa INT AUTO_INCREMENT PRIMARY KEY,
    id_telefone INT,
    cpf VARCHAR,
    FOREIGN KEY (id_telefone) REFERENCES telefone(idTelefone),
    FOREIGN KEY (cpf) REFERENCES pessosa(cpf)
)