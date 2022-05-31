const clientes = [
  {
    nome: 'Joao',
    cpf: '06278934567',
    dependentes: [{
      nome: 'Julia',
      parentesco: 'filha',
      dataNasc: '25/03/2015'
    },
    {
      nome: 'Lucas',
      parentesco: 'filho',
      dataNasc: '02/05/2010'
    }],
  },
  {
    nome: 'Juliana',
    cpf: '45678923454',
    dependentes: [{
      nome: 'Sophia',
      parentesco: 'filha',
      dataNasc: '30/08/2020'
    }],
  }
]

// Operador de espalhamento - reticencias
const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]
// console.log(listaDependentes)
console.table(listaDependentes)
