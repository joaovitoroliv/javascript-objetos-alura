// Javascript: Objetos - Alura
// Modulo 03 - Percorrendo Objetos

const cliente = {
  nome: "Jose",
  idade: 33,
  email: "jose@email.com",
  telefones: ["+550033338888", "+550033334444"],
  saldo: 100,
  depositar: function(valor) {
    this.saldo += valor;
  }
}
cliente.animalEstimacao = [{
  nome: "Kripto",
  raça: "Cão",
  vacinado: true
}]
cliente.animalEstimacao.push({
  nome: "Lex",
  raça: "Gato",
  vacinado: false
})

// Aula 02 - For...in - Método para percorrer objetos

let relatorio =""; let chaves ="";
for (let info in cliente){
  if (typeof cliente[info] ==="object" || typeof cliente[info] ==="function"){
      continue
    } else{
      relatorio += `
${info} ==> ${cliente[info]}
`
    }
  }
console.log(relatorio)

// Aula 03 - Métodos de Objeto
// Percorrer um objeto, verificar se existe a chave `dependentes` e, caso existe, enviar uma mensagem de oferta de seguro.

const clientes = {
  nome: "Jose",
  idade: 33,
  email: "jose@email.com",
  telefones: ["+550033338888", "+550033334444"],
  saldo: 100,
  dependentes: 'André',
  depositar: function(valor) {
    this.saldo += valor;
  }
}
clientes.animalEstimacao = [{
  nome: "Kripto",
  raça: "Cão",
  vacinado: true
}]
clientes.animalEstimacao.push({
  nome: "Lex",
  raça: "Gato",
  vacinado: false
})

// Método Object.keys e propsClientes
function oferecerSeguro(obj) {
  const propsClientes = Object.keys(obj);
  // Método Includes - sempre retorna true ou false
  if (propsClientes.includes("dependentes")){
    console.log(`Oferta de seguro de ${obj.nome}`)
  }
}
console.log(Object.keys(clientes))
console.log(Object.values(clientes))
console.log(Object.entries(clientes))


oferecerSeguro(clientes)

// Aula 04 - Métodos de Espalhamento
// lista-unica.js