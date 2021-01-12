// A função myRemove(arr, item) recebe um array arr 
// retorna uma cópia desse array sem o elemento item, caso ele exista no array
// Testes:
// Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
// Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
// Faça uma chamada para a função myRemove e verifique se o array original passado por parâmetro não sofreu alterações
// Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado

const myRemove = require("./ex02")

describe('myRemove', () => {
  test('Retornar um novo array removendo o item', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);    
  });
  test('Outros Testes', () => {
    // Testa se é Função
    expect(typeof myRemove).toEqual('function');
    // teste se foi definida:
    expect(myRemove).toBeDefined();
    // Teste para ver se o array original foi alterado:
    const arr = [1, 2, 3, 4];
    myRemove(arr, 1);
    expect(arr).toEqual([1, 2, 3, 4]);
    // testar tamanho do array
    expect((arr).length).toEqual(4);
  })
});