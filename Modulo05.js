// Javascript: Objetos - Alura
// Modulo 05 - Orientação a Objetos

// Aula 02 - Conceito de Orientação a Objetos
// Objetivo: Trazer pro código uma aproximação de um mundo real
// O que são classes? São Modelos usados para a criação de Objetos
// A classe define os atributos (caracteristicas) e os métodos (comportamentos) de um objeto
// Herança - É um mecanismo da Orientação a Objetos que permite que uma classe herde caracteristicas de uma outra classe base (reaproveitamento de código) - não preciso reinventar a roda
// OBS: "O Objeto é uma INSTÂNCIA de uma classe."
// Uma classe possui atributos e métodos
class Pessoa {
  // Quando chamamos const pessoa1 = new Pessoa(params) -> invocamos o constructor
  constructor(nome, sobrenome, cpf, email){
    this.nome = nome
    this.sobrenome = sobrenome
    this.cpf = cpf
    this.email = email
  }
  exibirNomeCompleto(){
    console.log(`${this.nome} ${this.sobrenome}`)
  }
}

aluno1521111 = new Pessoa('Joao Vitor', 'Oliveira Souza', '06206206225', 'jvosouza@email.com')
console.log(aluno1521111)
aluno1521111.exibirNomeCompleto()

// Herança
class Programador extends Pessoa {
  constructor(nome, sobrenome, cpf, email, linguagem){
    // Palavra 'super' equivalente ao 'call'
    super(nome, sobrenome, cpf, email)
    this.linguagem = linguagem
  }
}

estagiario = new Programador('Juliana', 'Massa', '56756756776', 'jumassa@email.com', 'C++')
console.log(estagiario)
estagiario.exibirNomeCompleto()
// A Orientação a Objetos é um modelo (estilo) de se programar - Paradigma de Programação

// Aula 03 - Criando uma Classe
// classe-cliente.js

console.log('AULA 04')
// Aula 04 - Para saber mais this, bind(), apply() e call()
// Vamos ver com mais detalhes o que faz o this e mais três métodos que utilizamos para manipulá-lo: call(), apply() e bind().
//Vamos criar um objeto pessoa com propriedades nome e email, além de um método para imprimir o nome da pessoa no terminal:
const pessoa = {
 nome: "Ana",
 email: "a@email.com",
 imprimeNome: function(){
   console.log(`${pessoa.nome}`)
 }
}

pessoa.imprimeNome() //Ana
// Usando o this
const pessoaa = {
 nome: "Ana",
 email: "a@email.com",
 imprimeNome: function(){
   console.log(`${this.nome}`)
 }
}

pessoa.imprimeNome() //Ana

// ImprimeNomeEmail desacoplado

function imprimeNomeEmail(){
 console.log(`nome: ${this.nome}, email ${this.email}`)
}

const pessoa1 = {
 nome: "Ana",
 email: "a@email.com",
 imprimeInfo: imprimeNomeEmail
}

const pessoa2 = {
 nome: "Paula",
 email: "p@email.com",
 imprimeInfo: imprimeNomeEmail
}

pessoa1.imprimeInfo()
//nome: Ana, email a@email.com
pessoa2.imprimeInfo()
//nome: Paula, email p@email.com

// O this representa o objeto que executa a função. Podemos dizer que a instrução passada para o JavaScript é: “execute a função aqui, utilizando este contexto”.


//No caso de atributos das funções construtoras ou dos construtores de classe, o this tem função similar: podemos dizer que o construtor recebe os atributos deste objeto:
function PessoaF(nome, email){
 this.nome = nome
 this.email = email
 this.imprimeNomeEmail = function(){
     console.log(`nome: ${this.nome}, email: ${this.email}`)
 }
}
const pessoa1F = new PessoaF("Ana", "a@email.com")
const pessoa2F = new PessoaF("Paula", "p@email.com")

pessoa1F.imprimeNomeEmail()
// nome: Ana, email: a@email.com
pessoa2F.imprimeNomeEmail()
// nome: Paula, email: p@email.com


console.log('\n Metodo Call: \n')
// Método call ()
// Esse método permite que uma função seja chamada com parâmetros e valor de this específicos. Vamos ver um exemplo:

function imprimeNomeEmailcall(tipoCliente){
 console.log(`${tipoCliente} - nome: ${this.nome}, email: ${this.email}`)
}

const cliente1call = {
 nome: "Carlos",
 email: "c@email.com"
}

const cliente2call = {
 nome: "Fred",
 email: "f@email.com"
}

// Criamos uma função imprimeNomeEmailcall que recebe como parâmetro um dado que chamamos de tipoCliente. Esta função imprime no terminal um string com tipoCliente mais duas informações que estão associadas a algum objeto (ainda não informado) com this.

//Vamos executar a função com call():

imprimeNomeEmailcall.call(cliente1call, "cliente especial")
// cliente especial - nome: Carlos, email: c@email.com

imprimeNomeEmailcall.call(cliente2call, "cliente estudante")
// cliente estudante - nome: Fred, email: f@email.com

// Como a função está sendo chamada como objeto do método call(), podemos especificar que o contexto de this em cada chamada se refere a um objeto diferente (cliente1 e cliente2), sem a necessidade de adicionar a função em cada um dos objetos.

// OBS: O PRIMEIRO PARÂMETRO DO MÉTODO CALL() SE REFERE AO OBJETO QUE SERÁ USADO COMO CONTEXTO DO THIS E, DO SEGUNDO PARÂMETRO EM DIANTE, SÃO PASSADOS OS ARGUMENTOS QUE A FUNÇÃO DEVE RECEBER. NO CASO ACIMA, HÁ SOMENTE UM PARÂMETRO, A STRING 'TIPOCLIENTE'.

console.log('\n Método Apply()')
// O método apply() funciona de forma muito semelhante ao call(), porém recebe os argumentos em um array ao invés de separados:
function imprimeNomeEmailapply(tipoCliente, agencia){
 console.log(`${tipoCliente} da agência ${agencia}:
   - nome: ${this.nome}, email: ${this.email}
   `)
}

const cliente1apply = {
 nome: "Carlos",
 email: "c@email.com"
}

const cliente2apply = {
 nome: "Fred",
 email: "f@email.com"
}
// Chamando imprimeNomeEmailapply com o método apply() e passando um array de dados como segundo parâmetro (lembrando que o primeiro parâmetro de apply() se refere ao contexto de this, igual ao método call():
const clienteEspecial = ["cliente especial", "Rio de Janeiro"]
const clienteEstudante = ["cliente estudante", "Fortaleza"]

imprimeNomeEmailapply.apply(cliente1apply, clienteEspecial)
// cliente especial da agência Rio de Janeiro: - nome: Carlos, email: c@email.com

imprimeNomeEmailapply.apply(cliente2apply, clienteEstudante)
// cliente estudante da agência Fortaleza: - nome: Fred, email: f@email.com

// UTILIZE O MÉTODO APPLY() CASO VOCÊ TENHA UM ARRAY DE DADOS E O CALL() PARA PASSAR VALORES INDIVIDUAIS COMO PARÂMETRO. LEMBRE-SE QUE O ARRAY DEVE SEGUIR A ORDEM CORRETA DOS PARÂMETROS INFORMADO NA FUNÇÃO.

console.log('Método Bind: \n')
// O método bind() “prende” ou “liga” uma função ao contexto de um objeto. Por exemplo:
const personagem = {
 nome: "Princesa Leia",
 apresentar: function(){
   return `a personagem é ${this.nome}`
 }
}
// O objeto acima contém uma propriedade nome e um método apresentar que retorna um string com nome; this.nome liga a propriedade nome ao contexto do objeto em que a função está definida, ou seja, “este objeto”.

// Vamos ver o que acontece se tentarmos executar essa função a partir de outro contexto:
const personagemGenerico = personagem.apresentar
console.log(personagemGenerico())
//a personagem é undefined

// Quando atribuímos apresentar() à variável personagemGenerico estamos retirando a função apresentar() do contexto do objeto na qual foi criada, e por isso this não está mais acessível; a função perdeu a referência original e não consegue mais localizar onde está this.

// Ressolvemos este problema com bind():

const personagemDefinido = personagemGenerico.bind(personagem)
console.log(personagemDefinido())
//a personagem é Princesa Leia

// Acima, utilizamos o método bind() para “ligar” a função que atribuímos a personagemGenerico ao objeto personagem. Assim, sempre que esta função for executada a partir da variável personagemDefinido, a função original vai usar o objeto personagem como contexto de execução. DESSA FORMA, THIS SEMPRE SE REFERE AO OBJETO PERSONAGEM E É CAPAZ DE ACESSAR SUAS PROPRIEDADES.

// Estes três métodos têm uma variedade enorme de usos no dia a dia da programação com JavaScript, faça mais testes a partir dos exemplos acima para se familiarizar com os conceitos.

// Aula 05 - Métodos e propriedades
// classe-cliente-poup.js