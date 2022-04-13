let num = window.document.querySelector('input#entrada')
let saida = window.document.querySelector('select#saida')
let result = window.document.querySelector('div#result')
let valores = []

function isNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
    
}

function isList(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumber(num.value) && !isList(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        saida.appendChild(item)
        result.innerHTML = ''
    } else {
        window.alert('Por-favor, digite um número novo entre 1 e 100')
    }
    num.value = ''
    num.focus()  
}

function finalizar() {
    let tot = valores.length
    if (tot == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        for(let pos in valores) {
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        let soma = 0
        for(let pos in valores) {
            soma += valores[pos]
        }
        let media = soma / tot
        result.innerHTML = ''
        result.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        result.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        result.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        result.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        result.innerHTML += `<p>A média dos valores informados é ${media}</p>`
    }
}

