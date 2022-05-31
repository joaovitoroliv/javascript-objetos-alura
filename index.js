// Aula 03 - Métodos de Objeto
// Percorrer um objeto, verificar se existe a chave `dependentes` e, caso existe, enviar uma mensagem de oferta de seguro.
const objPersonagem = {
 nome: "Gandalf",
 classe: "mago",
 nivel: "20"
}


const objPersonagem2 = objPersonagem
objPersonagem.nome = "Gandalf, o Cinzento"

console.log(objPersonagem.nome) //Gandalf, o Cinzento
console.log(objPersonagem2.nome) //Gandalf, o Cinzento

 
// console.log(nome);