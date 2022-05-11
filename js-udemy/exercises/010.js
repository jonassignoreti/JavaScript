/* Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro.
Exemplos:
simboloMais(2) // retornará "++"
simboloMais(4) // retornará "++++"
*/

const simboloMais = n => {
    let out = ''
    for (let i = 0; i < n; i++) {
        out = out.concat('+')
    }
    return out
}

console.log(simboloMais(2))
console.log(simboloMais(4))