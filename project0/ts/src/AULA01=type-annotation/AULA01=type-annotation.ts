let nome: string = 'Pedro'
let idade: number = 19
let adulto: boolean = true
let simbolo: symbol = Symbol('qualquer symbol')
//let big:bigint = 10n -> ES2020

// Arrays
let arrayDeNumeros: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let arrayNum: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let arrayDeStrings: Array<string> = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
let arrayString: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g']

//Objetos
let pessoa: { nome: string, idade: number, adulto?: boolean } = {
  nome: 'Pedro',
  idade: 19,
}

export default pessoa

// Funções

function soma(x: number, y: number): number {
  return x + y
}

const soma2: (x:number, y:number) => number = (x, y) => x + y
