const porta = 3003 // definife a porta do servidor no computador

const express = require('express') // importa o express
const app = express() // define o express na constante app
const bodyParser = require('body-parser') // importa o bodyParser
const bancoDeDados = require('./bancoDeDados') // importa o module.exports do arquivo bancoDeDados

app.use(bodyParser.urlencoded({ extended: true })) //

app.get('/produtos', (req, res, next) => { // retorna todos os produtos no banco de dados
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => { // retorna somente o produto passado como parâmetro através do id.
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => { // adiciona um produto novo no banco de dados
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) // JSON
})

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`)
})