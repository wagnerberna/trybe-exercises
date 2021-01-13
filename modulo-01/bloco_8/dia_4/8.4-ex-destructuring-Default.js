//8.4-ex-destructuring-Array
//ex1 - valor padrão para nacionalidade caso não exista no objeto.
const person = {
    name: "João",
    lastName: "Jr",
    age: 34
};

const { nationality = 'Brazil' } = person;
console.log(nationality);