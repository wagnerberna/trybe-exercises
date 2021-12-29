console.log(`---objeto1---`);
const familia = {
  name: 'Wagner',
  lastName: 'Berna',
  age: 38,
}
console.table(familia);
console.log(`Tipo funcionário: ${typeof familia}`); //objeto;
// atribuir valor:
familia.age = 40;
//exibir valor:
console.log(`idade Wagner é ${familia.age}`);

//---Object key value e entries (retorna um array de strings)
console.log('---Objetct---')
let objetoChaves = Object.keys(familia);
console.log(`Lista de Chaves ${objetoChaves}`);
console.log(objetoChaves[0]); //name

let objetoValores = Object.values(familia);
console.log(`Lista de Valores ${objetoValores}`);
console.log(objetoValores[0]); //name

let objetoEntradas = Object.entries(familia);
console.log(`Lista de Entradas ${objetoEntradas}`);
console.log(objetoEntradas[0]); //name

//---inserir nova chave:
// familia.esportes = ['corrida', 'pole', 'musculação'];
// console.log(`${familia}`);

//---inserir atribuir dinamicamente nova propriedade:
const newKey = 'esportes';
const newValue = ['corrida', 'pole', 'musculação'];
familia[newKey] = newValue;

//For in: exibe as chaves (key) 
console.log("exibe Chaves");
for (let key in familia) {
  console.log(key);
}
//For in: exibe os valores:
console.log("exibe Valore");
for (let key in familia) {
  console.log(familia[key]);
}
//For in: exibe chave e valores:
console.log("exibe Chaves e Valores");
for (let key in familia) {
  console.log(key, familia[key]);
}
//---Object key value e entries
console.log('---Objetct 2---')
objetoChaves = Object.keys(familia);
console.log(`Lista de Chaves ${objetoChaves}`);
console.log(objetoChaves[0]);

objetoValores = Object.values(familia);
console.log(`Lista de Valores ${objetoValores}`);
console.log(objetoValores[0]);

objetoEntradas = Object.entries(familia);
console.log(`Lista de Entradas ${objetoEntradas}`);
console.log(objetoEntradas[0]);


//-----objeto2
console.log(`---objeto2---`);
const familia2 = [
  {
  name: 'Aline',
  lastName: 'Flores',
  age: 45,
  },
  {
  name: 'Tânia',
  lastName: 'Berna',
  age: 40,
  },
    {
  name: 'Zeli',
  lastName: 'Flores',
  age: 50,
  }
]
//For in: exibe chave e valores: (exibe cada um dos arrays)
console.log("exibe Chaves e Valores");
for (let key in familia2) {
  console.log(key, familia2[key]);
}

// --- object
// para vários objetos têm de colocar o número do array
console.table(familia2);
//captura todos objetos em arrays
let objetoEntradas2 = Object.entries(familia2);
//exibe os 3 arrays 1 para cada objeto
console.log(objetoEntradas2);
//exibe o array 0
console.log(objetoEntradas2[0]);
//exibe o array 0 
console.log(objetoEntradas2[1]);
//exibe o array 1 + pos
console.log(objetoEntradas2[1][0]);
console.log(objetoEntradas2[1][1]);


console.log('---captura Objeto 0')
//captura objeto 0
let objetoEntradas3 = Object.entries(familia2[0]);
//exibe array obj 0
console.log(objetoEntradas3);
//exibe objeto 0 pos 0
console.log(objetoEntradas3[0]);
//exibe o array pos 1
console.log(objetoEntradas3[1]);
//exibe o array 1 + pos
console.log(objetoEntradas3[0][0]);
console.log(objetoEntradas3[0][1]);

console.log(objetoEntradas3[2][0]);
console.log(objetoEntradas3[2][1]);

//For in: objetc entries- só funciona com 1 objeto
console.log("exibe Chaves e Valores");
for (let key in objetoEntradas3) {
  console.log(key, objetoEntradas3[key]);
}

