class Cliente {
 constructor(nome, email, cpf, saldo){
   this.nome = nome
   this.email = email
   this.cpf = cpf
   this.saldo = saldo
 }

 depositar(valor){
   this.saldo += valor
 }

 exibirSaldo(){
   console.log(this.saldo)
 }
}

class ClienteVip extends Cliente{
  constructor(nome, email, cpf, saldo, cdb, crypto){
    super(nome, email, cpf, saldo)
    this.cdb = cdb
    this.crypto = crypto
  }
  saqueCdb(valor){
    this.cdb -= valor
    console.log(`Voce retirou ${valor} e possui ${this.cdb} aplicados em CDB`)
  }
  saqueCrypto(valor){
    this.crypto -= valor
    console.log(`Voce retirou ${valor} e possui ${this.crypto} aplicados em CDB`)
  }
}

const ju = new Cliente('Ju', 'ju@email.com', '45645645645', 100)
console.log(ju)
const jao = new ClienteVip('Jaozin', 'jao@email.com', '45645645665', 1000, 1000, 5000)
console.log(jao)
jao.saqueCdb(1000)
jao.saqueCrypto(2000)
console.log(jao)