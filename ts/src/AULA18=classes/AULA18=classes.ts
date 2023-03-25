export class Empresa {
  readonly nome: string; //public não necessário
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome
    this.cnpj = cnpj;
  }

  adicionaColaborador(colaborador: Colaborador): void{
    this.colaboradores.push(colaborador)
  }
}

export class Colaborador {
  constructor(public readonly nome: string, public readonly sobrenome: string) {

  }
}

const empresa1 = new Empresa('Fake', '11.111.111/0001-11')
const colobador1 = new Colaborador('Pedro', 'Henrique');
const colobador2 = new Colaborador('Edvaldo', 'Fagundes');
const colobador3 = new Colaborador('João', 'Henrique');

console.log(empresa1)
