let x = 10
x = 0b1010
const y = 10
const a = 100

const person = {
  nome: 'Pedro' as const,
  sobrenome: 'Henrique'
}

function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
  return cor
}

console.log(escolhaCor('Azul'))

export default 1
