// Javascript: Objetos - Alura
// Modulo 04 - Percorrendo Objetos


// Aula 03 - Métodos de Objeto
// Percorrer um objeto, verificar se existe a chave `dependentes` e, caso existe, enviar uma mensagem de oferta de seguro.

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


function oferecerSeguro(obj) {
  const propsClientes = Object.keys(cliente);
  // Método Includes - sempre retorna true ou false
  if (propsClientes.includes("dependentes")){
    console.log(`Oferta de seguro de vida`)
  }
}