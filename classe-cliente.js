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

usuario = new Cliente('Jao', 'joao@email.com', '06290090045', 300)
console.log(usuario)
usuario.exibirSaldo()
usuario.depositar(100)
usuario.exibirSaldo()
