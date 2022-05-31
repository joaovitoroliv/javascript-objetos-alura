// Javascript: Objetos - Alura
// Modulo 02 - Manipulação de Objetos 

const cliente = {
  nome: "Joao",
  idade: 25,
  cidade: "Ouro Preto",
  dependentes: [{
    nome: "Julia",
    parentesco: "filha",
    dataNasc: "29/07/2014"
  }, {
    nome: "Lucas",
    parentesco: "filho",
    dataNasc: "29/07/2015"
  }],
  saldo: 100,
  depositar: function(valor) {
    this.saldo += valor;
  }
}


console.log(cliente.dependentes);

const dependenteMaisNovo = cliente.dependentes.filter(parametro => parametro.dataNasc === "29/07/2015");
// Retorno do Filter sempre é um Array!!
console.log(dependenteMaisNovo);
console.log(`O filho(a) mais novo(a) é o(a) ${dependenteMaisNovo[0].nome}`);

// Aula 5 - Modulo 1 - Funções
console.log(cliente.saldo)
cliente.depositar(30)
console.log(cliente.saldo)

// Enquete:
const cliente2 = {
  nome: "Jose",
  idade: 33,
  email: "jose@email.com",
  telefones: ["+550033338888", "+550033334444"]
}
cliente2.animalEstimacao = [{
  nome: "Kripto",
  raça: "Cão",
  vacinado: true
}]
cliente2.animalEstimacao.push({
  nome: "Lex",
  raça: "Gato",
  vacinado: false
})

const animalEstimacao = cliente2.animalEstimacao.filter(animalEstimacao => animalEstimacao.raça === "Cão")
console.log(animalEstimacao[0].nome)