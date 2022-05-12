/* Desenvolva uma função que receba como parâmetro um número de 1 a 10. Internamente, na função, será
gerado um número aleatório de 1 a 10. A função deverá retornar se o parâmetro de entrada foi igual ao número
sorteado internamente. Se o valor fornecido foi o sorteado, retorne "Parabéns! O número sorteado foi o X". Se
não for igual, retorne "Que pena! O número sorteado foi o X". X é o número que foi sorteado.
Exemplos:
funcaoDaSorte(10) // retornará "Parabéns! O número sorteado foi o 10"
funcaoDaSorte(5) // retornará "Que pena! O número sorteado foi o 3"
funcaoDaSorte(5) // retornará "Que pena! O número sorteado foi o 1"
*/

function funcaoDaSorte (n) {
    let sorteado = Math.floor(Math.random() * 11) // Gera número aleatórios do 1 ao 10
    let number
    if (n > 10) {
        number = 10
    } else if (n < 1) {
        number = 1
    } else {
        number = n
    }
    if (number === sorteado) {
        return `Parabéns! O número sorteado foi o ${sorteado}`
    } else {
        return `Que pena! O número sorteado foi o ${sorteado}`
    }
}

console.log(funcaoDaSorte(-2))
console.log(funcaoDaSorte(-1))
console.log(funcaoDaSorte(0))
console.log(funcaoDaSorte(1))
console.log(funcaoDaSorte(2))
console.log(funcaoDaSorte(3))
console.log(funcaoDaSorte(4))
console.log(funcaoDaSorte(5))
console.log(funcaoDaSorte(6))
console.log(funcaoDaSorte(7))
console.log(funcaoDaSorte(8))
console.log(funcaoDaSorte(9))
console.log(funcaoDaSorte(10))
console.log(funcaoDaSorte(11))
console.log(funcaoDaSorte(12))