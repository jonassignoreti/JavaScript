function SerVivo(tamanho, peso) {
    this.tamanho = tamanho;
    this.peso = peso;
};

function Animal(tamanho, peso, n_membros, aquatico) {
    SerVivo.call(this, tamanho, peso); // .call() para chamar a função construtora Pai.
    this.n_membros = n_membros;
    this.aquatico = aquatico;
}

function Mamifero(tamanho, peso, n_membros, aquatico, cor_pelo, n_mamas) {
    Animal.call(this, tamanho, peso, n_membros, aquatico);
    this.cor_pelo = cor_pelo;
    this.n_mamas = n_mamas;
}

const novo_ser_vivo = new SerVivo(100, 50);
const novo_animal = new Animal(4, false, 25, 10);
const novo_mamífero = new Mamifero(40, 7.5, 4, false, 'Marrom', 6);

console.log(novo_ser_vivo)
console.log(novo_animal)
console.log(novo_mamífero)