CREATE DATABASE sprint_3;
USE sprint_3;

CREATE TABLE responsavel (
idResponsavel int primary key auto_increment,
nomeResponsavel varchar(60),
sobrenome varchar(45),
telefone char(11),
email varchar(60),
senha char(8));

DESCRIBE responsavel;


SELECT * FROM responsavel;

CREATE TABLE fazenda (
idFazenda int primary key auto_increment,
nomeFazenda varchar(60),
CEP char(9),
numeroEnd varchar(45),
complemento varchar(45),
rzSocial varchar(45),
CNPJ char(14),
email varchar(60),
senha char(8),
telefone char(11),
fkResponsavel int,
constraint fkFazendaResponsavel foreign key (fkResponsavel)
references responsavel (idResponsavel));

DESCRIBE fazenda;


SELECT * FROM fazenda;

CREATE TABLE funcionario (
idFunc int primary key auto_increment,
nome varchar(45),
sobrenome varchar(45),
telefone varchar(45),
fkFFazenda int,
email varchar(60),
senha char(8),
constraint fkFuncFazenda foreign key (fkFFazenda)
references fazenda (idFazenda));

DESCRIBE funcionario;


SELECT * FROM funcionario;

CREATE TABLE capril (
idCapril int primary key auto_increment,
nomeCapril varchar(45),
localizacao varchar(45),
capacidade_max int,
fkFazenda int,
constraint fkCaprilFazenda foreign key (fkFazenda)
references fazenda (idFazenda));
DESCRIBE capril;


SELECT * FROM capril;

CREATE TABLE sensores (
idSensores int primary key auto_increment,
nomeSensor varchar(45),
localizacao varchar(45),
tipoSensor varchar (45),
temp_minima double,
temp_maxima double,
umidade_min double,
umidade_max double,
fkCaprilSensor int,
constraint fkSensoresCapril foreign key (fkCaprilSensor)
references capril (idCapril));



DESCRIBE sensores;

SELECT * FROM sensores;

CREATE TABLE medida (
idMedida int primary key auto_increment,
dht11_temperatura double,
dht11_umidade double,
dtCaptura datetime not null default current_timestamp(),
fkSensores int,
constraint fkTempSensor foreign key (fkSensores)
references sensores (idSensores));

SELECT * FROM medida;

-- SELECT DOS DAODS DO CLIENTE E DOS DADOS DE TODAS AS FAZENDAS

SELECT * FROM responsavel JOIN fazenda ON fkResponsavel = idResponsavel
 JOIN capril ON fkFazenda = idFazenda;
 
 -- SELECT DOS DADOS DO CLIENTE, FAZENDA, FUNCIONÁRIO E CAPRIS QUE POSSUEM O MONITORAMENTO
 
 SELECT * FROM responsavel JOIN fazenda ON fkResponsavel = idResponsavel
 JOIN funcionario ON fkFFazenda = idFazenda
 JOIN capril ON fkFazenda = idFazenda 
 JOIN sensores ON fkCaprilSensor = idCapril
 LEFT JOIN medida ON fkSensores = idSensores;    

 SELECT 
    responsavel.nomeResponsavel AS Nome_Responsavel,
    responsavel.sobrenome AS Sobrenome_Responsavel,
    responsavel.telefone AS Telefone_Responsavel,
    responsavel.email AS Email_Responsavel,
    fazenda.nomeFazenda AS Nome_Fazenda, 
    fazenda.CEP AS CEP_Fazenda, 
    fazenda.numeroEnd as Numero_Endereco,
    fazenda.complemento as Complemento,
    fazenda.rzSocial as Razão_Social,
    fazenda.CNPJ as CNPJ,
    fazenda.email as Email,
    fazenda.senha as Senha,
    fazenda.telefone as Telefone,
    funcionario.nome as Nome_Funcionario,
    funcionario.sobrenome as Sobrenome, 
    funcionario.telefone as Telefone,
    sensores.*, 
    medida.*
FROM responsavel
JOIN fazenda ON responsavel.idResponsavel = fazenda.fkResponsavel
JOIN capril ON fazenda.idFazenda = capril.fkFazenda
JOIN sensores ON capril.idCapril = sensores.fkCaprilSensor
JOIN funcionario ON fazenda.idFazenda = funcionario.fkFFazenda
LEFT JOIN medida ON sensores.idSensores = medida.fkSensores;


 

 






























 



