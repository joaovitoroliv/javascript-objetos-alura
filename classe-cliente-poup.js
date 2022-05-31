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
    console.log(`O saldo de ${this.nome} é de ${this.saldo} reais`)
  }
}

class ClientePoupanca extends Cliente {
  constructor(nome, email, cpf, saldo, saldoPoupanca){
    super(nome, email, cpf, saldo)
    this.saldoPoupanca = saldoPoupanca
  }
  depositarPoupanca(valor){
    this.saldoPoupanca += valor
  }
}

const jao = new ClientePoupanca('Jaozin', 'jao@email.com', '56556543456', 100, 500)
console.log(jao)
jao.depositar(50)
console.log(jao)
jao.depositarPoupanca(50)
console.log(jao)

