// A função sum(a, b) retorna a soma do parâmetro a com o b
// Teste se o retorno de sum(4, 5) é 9
// Teste se o retorno de sum(0, 0) é 0
// Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
// Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")
const sum = require('./ex01');

describe('sum', () => {
  test('soma dois números', () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
  });

  test('Erro em parâmetro String', () => {
    expect(() => {sum(4, "5")}).toThrowError(new Error('parameters must be numbers'));
  });
    test('Outros Testes', () => {
    // Testa se sum é Função
    expect(typeof sum).toEqual('function');
    // teste se SUM foi definida:
    expect(sum).toBeDefined();
  })
});
