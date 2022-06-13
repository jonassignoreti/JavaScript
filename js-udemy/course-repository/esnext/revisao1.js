// let e const
{
    var a = 2
    let b = 3
    console.log(b) // let doesn't have scope of bloc
}
console.log(a) //var não tem escopo de bloco

// Template String
const produto = 'iPad'
console.log(`${produto} é caro!`)

// Destructuring
const [l, e, ...tras] = "Cod3r" // atribui para 'l' a letra "C", atribui para 'e' a letra "o", e atribui para 'tras' o restante das letras
console.log(l, e, tras)

const [x, , y] = [1, 2, 3]
console.log(x, y)

const { idade: i, nome } = { nome: 'Ana', idade: 9 } // destrutura atributos de um objeto
console.log(i, nome)