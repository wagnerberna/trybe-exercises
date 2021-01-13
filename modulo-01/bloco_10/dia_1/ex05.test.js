const obj1 = {
  city: "São Paulo",
  state: "São Paulo"
};

const obj2 = {
  city: "Campinas",
  state: "São Paulo"
};

const obj3 = {
  city: "São Paulo",
  state: "São Paulo"
};

test("comparing objects", () => {
  expect(obj1).toEqual(obj3);
  expect(obj1).not.toEqual(obj2);
});

module.exports = obj1;
module.exports = obj2;
module.exports = obj3;

describe('Teste Objetos', () => {
  test('comparação conteúdo de objetos', () =>{
    expect(obj1).toEqual(obj3);
    expect(obj1).not.toEqual(obj2);
    expect(obj3).not.toEqual(obj2);
  })
})