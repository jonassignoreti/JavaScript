/* Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusivo) e retorne se
o parâmetro numero (o primeiro) está entre minimo e maximo. Quando o parâmetro inclusivo for true, tenha
"entre" como inlusivo, ou seja, considerando se numero é igual a minimo ou a maximo. Caso o parâmetro
inclusivo não seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não
considerando se numero é igual a minimo ou a maximo.
Exemplos:
estaEntre(10, 100, 50) // retornará true
estaEntre(16, 100, 160) // retornará false
estaEntre(3, 150, 3) // retornará false
estaEntre(3, 150, 3, true) // retornará true 
*/

const estaEntre = function (n, min, max, inclusivo=false) {
    if (min > max) {
        let minimo = min
        min = max
        max = minimo
    }
    console.log('min: ', min, 'max:', max)
    if (inclusivo) {
        if (min <= n && n <= max) {
            return true
        } else {
            return false
        }
    } else {
        if (min < n && n < max) {
            return true
        } else {
            return false
        }
    }
}

console.log(estaEntre(60, 100, 50)) // retornará true
console.log(estaEntre(16, 100, 160)) // retornará false
console.log(estaEntre(3, 150, 3)) // retornará false
console.log(estaEntre(3, 150, 3, true)) // retornará true 