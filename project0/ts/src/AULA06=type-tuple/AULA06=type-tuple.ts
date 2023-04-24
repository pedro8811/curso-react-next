// Tuple
const dadosCliente1: readonly [number, string] = [1, 'Pedro']
const dadosCliente2: [number, string, string] = [1, 'Pedro', 'Henrique']
const dadosCliente3: [number, string, string?] = [1, 'Pedro', 'Henrique']
const dadosCliente4: [number, string, ...string[]] = [1, 'Pedro', 'Henrique']

// dadosCliente1[0] = 5
// dadosCliente1[1] = 'Ok'
// dadosCliente1.pop()

console.log(dadosCliente1)
console.log(dadosCliente2)
console.log(dadosCliente3)
console.log(dadosCliente4)

//readonly
const array1: readonly string[] = ['Pedro', 'Henrique']
const array2: ReadonlyArray<string> = ['Pedro', 'Henrique']

console.log(array1)
console.log(array2)

