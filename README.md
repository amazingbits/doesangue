<div align="center">
    <img src="https://i.ibb.co/d2vNG5w/logo-removebg-preview.png" alt="logo do projeto doesangue" width="150px" />
</div>

<div align="center" style="display: inline-flex; gap:5px;">
    <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="NodeJS" />
    <img src="https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=mariadb&logoColor=white" alt="MariaDB" />
    <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
    <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
</div>

#### Descrição

Trata-se de um sistema simples de cadastro de doadores de sangue. O cadastro é feito online por usuários que entram com dados (nome, e-mail e tipo sanguíneo) que são cadastrados no banco de dados e exibidos na página inicial.

#### Tecnologias utilizadas

- HTML
- CSS
- Javascript
- NodeJS
- Mysql
- Template engine Nunjucks

#### Prints do Projeto

`página inicial`
<div align="center">
    <img src="https://i.ibb.co/FYhTjXz/pagina-projeto.jpg" alt="print do projeto" />
</div>
<br>

`bloco para cadastrar doador`
<div align="center">
    <img src="https://i.ibb.co/c2gRSDY/formulario.jpg" alt="print do projeto" />
</div>
<br>

`página 404`
<div align="center">
    <img src="https://i.ibb.co/S0VgfWj/404.jpg" alt="print do projeto" />
</div>
<br>

#### Pré-requisitos

- NodeJS na versão 16 ou superior
- Docker

#### Como testar

1. Clone o repositório através do comando
```
git clone https://github.com/amazingbits/doesangue
```

2. Ao abrir o projeto no IDE da sua preferência e com o terminal na pasta raíz, execute o seguinte comando para instalar as dependências do projeto:

```
npm install
```

3. Após isso, execute o seguinte comando para criar um contêiner com o banco de dados (além de um PHPMyadmin para gerenciamento no navegador):

```
docker-compose up -d
```

4. No `PHPMyadmin`, acesse a aba `SQL`, cole e execute a seguinte query:

```
USE db_doesangue;

CREATE TABLE IF NOT EXISTS doador(
id INT NOT NULL AUTO_INCREMENT,
nome VARCHAR(255),
email VARCHAR(255),
tipo_sanguineo VARCHAR(4),
PRIMARY KEY(id));
```

Após isso, no terminal do seu projeto, execute `npm run test` para rodar o projeto e ser possível acessá-lo no navegador através do link `http://localhost:3000`

#### Diário de bordo
`diário de bordo da época em que o prjeto foi feito`

17/02/2020

Neste dia foi desenvolvido o font-end do site. Foram feitos os seguintes passos:

* Marcação com HTML
* Posicionamento, alinhamento e demais funções relacionadas ao layout com CSS e Javascript

18/02/2020

Neste dia foi concluído o projeto com o back-end.

Através do NodeJS instalei as devidas dependências (Express, Nunjucks e Mysql2) e criei as rotas necessárias: get e post para a rota raíz, além de uma rota para página não encontrada (erro 404).
