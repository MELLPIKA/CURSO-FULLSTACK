const carros = [
  {
    id: 1,
    marca: "Ford",
    nome: "Fiesta",
    cor: "Prata",
    velocidademaxima:150,
  },
  {
    id: 2,
    marca: "chevrolet",
    nome: "camaro",
    cor: "vermelho",
    velocidademaxima:210,
  },
  {
    id: 3,
    marca: "mercedes",
    nome: "c180",
    cor: "preto",
    velocidademaxima:250,

  },
  {
    id: 4,
    marca: "volkswagen",
    nome: "polo",
    cor: "cinza",
    velocidademaxima:170,

  },
  {
    id: 5,
    marca: "jaguar",
    nome: "f-pace",
    cor: "azul",
    velocidademaxima:300,

  }
]

const carrosvelozes = carros
  .filter (carro => carro.velocidademaxima >= 200)
  .forEach(carro => console.log(carro.nome))





