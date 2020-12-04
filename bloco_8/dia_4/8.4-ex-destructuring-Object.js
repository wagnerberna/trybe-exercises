//8.4-ex-destructuring-Object
//ex1
console.log('exemplo1:');
const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas'
};

const { name, seller } = product;

console.log(name); // Smart TV Crystal UHD
console.log(seller); // Casas de Minas

const printProductDetails = ({ name, price, seller }) => {
  console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`)
};

printProductDetails(product);

//ex2 renomeando objetos:
console.log('exemplo2:');
const student = {
  a: 'Maria',
  b: 'Turma B',
  c: 'Matematica',
};

const { a:name, b:classAssigned, c:subject } = student;

console.log(name); // Maria
console.log(classAssigned); // Turma B
console.log(subject); // Matemática
