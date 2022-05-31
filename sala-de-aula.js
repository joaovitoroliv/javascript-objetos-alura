// Modulo 04 - Aula 02

function SalaAula(alunos){
  this.alunos = alunos || []
}


SalaAula.prototype = {
  adicionarAluno: function (aluno){
    this.alunos.push(aluno)
  },

  mostrarAlunos: function(){
  return this.alunos
  }
}

function NovaSala(){
  SalaAula.call(this)
}

// Como fazer uma funcao herdar a outra em JS
NovaSala.prototype = Object.create(SalaAula.prototype)

const novaSala = new NovaSala()
//Equivalente 
// const novaSala = Object.create(NovaSala.prototype)
// class NovaSala extends SalaAula {}
novaSala.adicionarAluno('Joao')
console.log(novaSala.mostrarAlunos())