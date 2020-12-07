
const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];
//Dada uma matriz de matrizes, transforme em uma única matriz. 
function flatten() {
  //const spreadArray = [...arrays];
  //console.log(novoArray); //1 arrray de 3 arrays.
  return arrays.reduce((result, current) => {
    return result.concat(current);
  }, [])
};

assert.deepStrictEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);