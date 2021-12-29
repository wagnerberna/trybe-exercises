//Ojbetos com objetos

const casalFit = [
  {
    name: 'Wagner',
    lastName: 'Berna',
    age: 38,
    esportes: [
      {
        nome: 'Corrida',
        beneficio: 'Resistência',
      },
      {
        nome: 'Calistenia',
        beneficio: 'Força',
      },
    ]
  },
  {
    name: 'Aline',
    lastName: 'Flores',
    age: 18,
    esportes: [
      {
        nome: 'Ballet',
        beneficio: 'Flexibilidade',
      },
      {
        nome: 'Pole',
        beneficio: 'consciência corporal',
      },
    ]
  },
]
//acesso objeto 
console.table(casalFit);
console.log(casalFit); // array de 2 posições
console.log(casalFit[0]); // exibe 1º array
//acessar propriedade objeto
console.log(casalFit[0].name); //exibe valor da propriedade nome
casalFit[0].name = 'Wagui'; //altera meu nome
console.log(casalFit[0]); // 1º array
//acessar propriedade esportes com array dentro

//acessar propriedade esportes com array dentro
//elementos do array esportes
console.log(casalFit[0].esportes.length);
//wagner array 0
console.log(casalFit[0].esportes[0].nome);
//Aline array 1
console.log(casalFit[1].esportes[1].nome);



