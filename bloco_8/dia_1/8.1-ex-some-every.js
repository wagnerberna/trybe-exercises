//---some - retorna true se ao menos 1 elemento do array satisfaz a condição.
//--ex1 - se algum nome começa com a letra desejada:
console.log('exemplo1 some:');

const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const verifyFirstLetter = (letter, names) => {
  return names.some((name) => name[0] === letter);
};

console.log(verifyFirstLetter('J', listNames)); // true
console.log(verifyFirstLetter('x', listNames)); // false

//---every - retorna true se Todos elementos do array satisfazem a condição.
//--ex1 verificar se o estudante passou em todas matérias
console.log('exemplo2 Every:');

const notes = {
  portugues: 'Aprovado',
  matematica: 'Reprovado',
  ingles: 'Aprovado',
};

const verifyNotes = (studentNotes) => {
  return Object.values(studentNotes).every((note) => note === 'Aprovado');
};

console.log(verifyNotes(notes));