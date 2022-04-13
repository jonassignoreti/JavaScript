let num = [] // declaração de variável composta
console.log(num)

console.log('---------------------------')
let numbers = [5, 8, 4] // declarando um array com elementos já inseridos
numbers[3] = 7 // adiciona na posição entre colchetes
numbers.push(1) // adiciona na última posição
console.log(numbers)

console.log('---------------------------')
let pos = numbers.indexOf(8) // .indexOf() retorna a posição do elemento buscado dentro do vetor. se não existir, ele retorna -1
console.log(`O número 8 está na posição ${pos} do vetor numbers`)

console.log('---------------------------')
console.log(`O vetor number possui ${numbers.length} elementos`) // atributo .lenght mostra o número de elementos dentro de um array

console.log('---------------------------')
numbers.sort() // .sort() método que coloca os elementos em ordem
console.log(`Aqui temos o vetor numbers ordenado: ${numbers}`)

console.log('---------------------------')
for(let pos = 0; pos < numbers.length; pos++){
    console.log(`O elemento ${pos} está na posição ${pos}`)
}

console.log('---------------------------')
for(let pos in numbers){ // Repetição de arrays e objetos
    console.log(`O elemento ${numbers[pos]} está na posição ${pos}`)
}