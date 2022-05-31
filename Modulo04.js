// Javascript: Objetos - Alura
// Modulo 04 - Prototype

// Aula 02 - O que é Prototype
// Tudo em JS é Objetos, baseados em Prototype

const arr = [1,2,3]
// So consigo ver no Dev Tools
// console.log(arr.__proto__)
//  Assunto sobre: Prototype Chain e Herança Prototipal

// Função para criar um novo objeto, baseado em outro objeto - Herança
const meuObjeto = {
  a: 1,
  b: 2,
}
const novoObjeto = Object.create(meuObjeto)
novoObjeto.b = 5
console.log(meuObjeto.b + novoObjeto.b)
console.log(meuObjeto)
console.log(novoObjeto)

console.log(meuObjeto.hasOwnProperty('a')) //true
console.log(meuObjeto.hasOwnProperty('map')) //false

// Problema da Sala de Aula
// sala-de-aula.js

// Aula 03 - Propriedades de Prototype
// clientes-genereicos.js

// Aula 04 - Manipulando o Prototype
// cliente-poupança.js