//---rest (...array) - igual spred, mas usado como parâmetro de função.
//ex1
console.log('exemplo1:');
const sum = (...args) => {
  return args.reduce((accumulator, current) => accumulator + current, 0);
};
console.log(sum(4, 7, 8, 9, 60)); // 88