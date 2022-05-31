// Modulo 04 - Aula 03 - Propriedades de Prototype
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
// Função Cliente servirá de função construtora para criamos um Objeto com base nessa função. Ou seja, essa função sempre criará um objeto 'cliente' com base nessa função
// Exemplo de utilização:
const andre = new Cliente('Andre', '06215923645', 'andre3213@hotmail.com', 3000)
console.log(andre)

// Conceito de Herança
