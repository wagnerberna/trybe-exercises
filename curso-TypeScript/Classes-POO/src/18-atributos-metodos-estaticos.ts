// static: atributos e métodos estatáticos, pertencem a classe
// e não a instância
class Matematica {
  static PI = 3.1416;

  static areaCirc(raio: number): number {
    return this.PI * raio * raio;
  }
}

console.log("Atributos e Métodos Estatáticos:");

// Não precisa instanciar para acessar
console.log(Matematica.areaCirc(4));

// não acessa por instância
// const m1 = new Matematica();
// m1.PI = 4.2;
// console.log(m1.areaCirc(4));
