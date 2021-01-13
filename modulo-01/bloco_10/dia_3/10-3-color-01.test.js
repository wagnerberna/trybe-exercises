const service = require('./10-3-color');

test("#randomRgbColor", () => {
// testando se a função foi chamada e qual seu retorno
// jest.fn().mockReturnValue - define valor de retorno quando ela for chamada
// após chamar testes se ela foi chamada e se o resultado é igual

  service.randomRgbColor = jest.fn().mockReturnValue("rgb(255, 255, 255)");

  service.randomRgbColor();
  expect(service.randomRgbColor).toHaveBeenCalled();
  expect(service.randomRgbColor()).toBe("rgb(255, 255, 255)");
});