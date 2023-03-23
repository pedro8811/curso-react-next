enum Cores {
  VERMELHO = 10, // 10
  AZUL = 100, // 100
  AMARELO = 200,  // 200
  ROXO = 'ROXO',
}

enum Cores{
  VERDE = 201,
  ROSA
}

// console.log(Cores)

export function escolhaACor(cor: Cores): void{
  console.log(Cores[cor])
}

escolhaACor(Cores.ROXO)
