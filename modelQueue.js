class Person {
    constructor(id, name, nasc) {
      this.id = id
      this.name = name
      this.nasc = nasc
    }
  }
  
  class Queue {
    constructor() {
      this.normalQueue = []
      this.preferentialQueue = []
      this.countPreferential = 2
      this.idNormal = 1
      this.idPreferential = 1
    }
  
    addPerson(name, nasc) {
      let referenceYear = ((new Date()).getFullYear()) - 60
      if (nasc <= referenceYear) {
        this.preferentialQueue.push(new Person(
          (`P${this.idPreferential}`), name, nasc))
        this.idPreferential += 1
        return `P${this.preferetialQueue[-1].id}`
      } else {
        this.normalQueue.push(new Person(
          (`N${this.idNormal}`), name, nasc))
        this.idNormal += 1
      }
    }
  
    callPerson() {
      if (this.countPreferential > 0 & this.preferentialQueue.length > 0) {
        console.log(
          `Chamado: ${this.preferentialQueue[0].id}
          ${this.preferentialQueue[0].name}`)
        this.preferentialQueue.shift()
        this.countPreferential -= 1
      } else if (this.normalQueue.length > 0){
        console.log(
          `Chamado: ${this.normalQueue[0].id}
          ${this.normalQueue[0].name}`)
        this.normalQueue.shift()
        this.countPreferential = 2
      } else {
        console.log('Filas Vazias')
      }
    }
  
    showQueue() {
      console.log('Fila Normal')
      console.log(this.normalQueue)
      console.log('Fila Preferencial')
      console.log(this.preferentialQueue)
      console.log('---------------------------------------')
    }
  }
  
  console.log(' << PROGRAMA GERADOR DE SENHAS >>')
  
  const queue = new Queue
  let choice = 0
  let name
  let nasc
  let id
  
  while (true) {
    // Escolha do Usuário (2: adicionar pessoa / 1: chamar próximo da fila / 3: sair)
    choice = prompt("Qual sua escolha? /n1) Chamar uma pessoa, /n2) Nova Senha, /n3) Sair do sistema. /n >")
    // Limpar a sequência anterior
    console.clear()
    // Condicionais 
    if (choice === 1) { //chamando uma pessoa
      queue.callPerson()
    } else if (choice === 2) { // adicionando nova Senha
      name = prompt("Qual é seu Nome? ")
      nasc = prompt("Qual é seu Ano de Nascimento? ")
      id = queue.addPerson(name, nasc)
      console.log(`Obrigado ${name}, sua senha é ${id}`)
    } else if (choice === 3) { // finalizando o programa
      console.log('Programa finalizado.')
    } else { // caso de digitação não esperada
      console.log('Opção Inválida, tente novamente')
    }
  }
  