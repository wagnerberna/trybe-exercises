// A função myRemoveWithoutCopy(arr, item) recebe um array arr 
// retorna o próprio array sem o elemento item , caso ele exista no array
// Testes:
// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
// Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações
// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado

const myRemoveWithoutCopy = require('./ex03');

console.log(myRemoveWithoutCopy([1, 2, 3, 4], 3));
describe('myRemoveWithoutCopy', () => {
    test('retornar o array original sem o item removido', () => {
        expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
        expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
        expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
        //testa se o array original foi alterado:
        const arrayTest = [1, 2, 3, 4];
        myRemoveWithoutCopy(arrayTest, 3);
        expect(arrayTest).toEqual([1, 2, 4]);
    });
});