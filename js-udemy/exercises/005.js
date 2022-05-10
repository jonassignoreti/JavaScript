/* Crie uma função que receba dois números e retorne se o segundo é maior ou diferente do primeiro.
Exemplos:
maiorOuIgual(0, 0) // retornará true
maiorOuIgual(0, "0") // retornará false
maiorOuIgual(5, 1) // retornará false
*/

const maiorOuIgual = (x, y) => x < y || x === y

console.log(maiorOuIgual(0, 0))
console.log(maiorOuIgual(0, "0"))
console.log(maiorOuIgual(5, 1))