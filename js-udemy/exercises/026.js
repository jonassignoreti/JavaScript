/**
 * Desenvolva uma função que receba uma string como parâmetro e retorne essa string somente com as
consoantes, ou seja, sem as vogais.
Exemplos:
removerVogais("Cod3r") // retornará "Cd3r"
removerVogais("Fundamentos") // retornará "Fndmnts"
 */
const isConsoant = c => c != 'a' && c != 'e' && c != 'i' && c != 'o' && c != 'u'

function removerVogais (word) {
    return word.split('').filter(isConsoant).toString()
}

console.log(removerVogais("Cod3r")) // retornará "Cd3r"
console.log(removerVogais("Fundamentos")) // retornará "Fndmnts"