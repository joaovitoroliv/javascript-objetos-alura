// Modulo 04 - Aula 04 - Manipulando o Prototype
function Cliente(nome, cpf, email, saldo){
  this.nome = nome
  this.cpf = cpf
  this.email = email
  this.saldo = saldo
  // Criamos um método depositar
  this.depositar = function (valor){
    this.saldo += valor
  }
}

function ClientePoupanca(nome, cpf, email, saldo, saldoPoup){
  // Chamar o construtor do 'Cliente' para dentro do meu construtor do 'ClientePoupança', para Herdar todas as propriedades de 'Cliente' para dentro de 'ClientePoupança'
  Cliente.call(this,nome,cpf,email,saldo)
  this.saldoPoup = saldoPoup
}

const ju = new ClientePoupanca('Ju', '45645645645', 'ju@email.com', 100, 200)
console.log(ju)

// Método depositar na poupança feito atraves do Prototipo
ClientePoupanca.prototype.depositarPoup = function(valor){
  this.saldoPoup += valor
}

ju.depositarPoup(30)
console.log(ju.saldoPoup)