//chamando dependências
const express = require('express')
const nunjucks = require('nunjucks')
const mysql = require('mysql2')

//iniciando o servidor
const server = express()

//habilitando capturar itens do body
server.use(express.urlencoded({extended: true}))

//configurando pasta de arquivos estáticos
server.use(express.static('public'))

//configurando extensão de arquivos para html
server.set('view engine', 'html')

//configurando nunjucks
nunjucks.configure('views', {
    express: server,
    noCache: true,
    autoescape: false
})

//conexão com banco de dados
const conexao = mysql.createConnection({
    host: 'localhost',
    //seu usuário aqui
    user: 'SEU USER',
    //sua senha aqui
    password: 'SUA SENHA',
    database: 'doe'
})

//rota principal
server.get('/', function(req, res) {
    //selecionar os itens do banco
    const sql = 'SELECT * FROM `DOADOR` ORDER BY ID DESC'
    conexao.execute(sql, function(err, results, fields){
        if(err) return res.send('Erro com o banco de dados...')
        const dados = results
        return res.render('index', {dados})
    })
})

server.post('/', function(req, res) {
    //dados do form
    const nome = req.body.nome
    const email = req.body.email
    const sangue = req.body.sangue

    //regra de negócio pra não permitir campos vazios
    if(nome == "" || email == "" || sangue == 0){
        return res.render('error')
    }

    //se passar pela regra, segue o programa
    //inserimos os dados no banco
    const sqlInsert = 'INSERT INTO `DOADOR` VALUES (null, ?, ?, ?)'
    conexao.execute(sqlInsert, [nome, email, sangue], function(err, results, fields){
        if(err) return res.render('error')
        return res.redirect('/')
    })

})

//página de erro 404
server.get('*', function(req, res) {
    return res.render('404')
})

//porta 3000
server.listen(3000, function(){
    console.log('servidor iniciado!')
})