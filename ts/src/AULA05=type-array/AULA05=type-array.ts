// Array<T> - T[]
function multiplicaArgs(...args: Array<number>) {
  return args.reduce((acc, valor) => acc * valor, 1)
}

export function concatenaString(...args: Array<string>): string {
  return args.reduce((acc, valor) => acc + valor)
}

export function upperCase(...args: string[]): string[] {
  return args.map(valor => valor.toUpperCase())
}

const multiResult = multiplicaArgs(1,2,3)
const concatResult = concatenaString('a', 'b', 'c')
const upperCaseResult = upperCase('a', 'b', 'c')

console.log(multiResult)
console.log(concatResult)
console.log(upperCaseResult)
