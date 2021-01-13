
    // A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" 
    // se o número for divisível por 3 e 5 , retorna "fizz" 
    // se for divisível apenas por 3 , retorna "buzz" 
    // se divisível apenas por 5 , retorna o próprio número 
    // caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número
    // Testes
    // Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
    // Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
    // Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
    // Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
    // Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado

    const myFizzBuzz = require('./ex04');

describe('myFizzBuzz', () => {
  test('returns `fizzbuzz` if the argument is divisible by 3 and 5', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  test('return `fizz` if the argument is divisible only by 3', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });

  test('return `fizz` if the argument is divisible only by 5', () => {
    expect(myFizzBuzz(25)).toBe('buzz');
  });

  test('returns the own argument if it is not disisible by 3 or 5', () => {
    expect(myFizzBuzz(17)).toBe(17);
  });

  test('returns `false` if the argument is not a number', () => {
    expect(myFizzBuzz('this_is_not_a_number')).toBeFalsy();
  });
});