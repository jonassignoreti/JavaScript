const sequence = { // contador sequencial
    _id: 1,
    get id() { return this._id++ }
}

const produtos = {} // simula um banco de dados

function salvarProduto(produto) {
    if (!produto.id) produto.id = sequence.id // define a id do produto novo
    produtos[produto.id] = produto
    return produto
}

function getProduto(id) { // retorna o produto na posição passada pelo id
    return produtos[id] || {}
}

function getProdutos() { // retorna o valor de todos os produtos.
    return Object.values(produtos)
}

function excluirProduto(id) {
    const produto = produtos[id] // guarda em uma constante para mostrar no retorno.
    delete produtos[id] // remove o produto passado por parametro
    return produto // retorna o produto para visualização
}

module.exports = { salvarProduto, getProduto, getProdutos, excluirProduto } // permite as funções a serem exportadas do arquivo