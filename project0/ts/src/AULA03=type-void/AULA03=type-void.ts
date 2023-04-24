function semRetorno(...args:string[]):void{
  console.log(args.join(' '))
}

const pessoa = {
  nome: 'Pedro',
  sobrenome: 'Henrique',

  exibirNome(){
    console.log(this.nome + '' + this.sobrenome)
  }
}

semRetorno('Pedro', 'Henrique')
pessoa.exibirNome()

export {pessoa}
