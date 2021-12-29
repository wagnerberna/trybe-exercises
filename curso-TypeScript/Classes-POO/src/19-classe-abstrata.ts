//abstract: classe abstrata
abstract class Calculo {
  protected resultado = 0;

  abstract executar(...numeros: number[]): void;

  getResultado(): number {
    return this.resultado;
  }
}

// Classe Filha
class Soma extends Calculo {
  executar(...numeros: number[]): void {
    this.resultado = numeros.reduce((acc, el) => acc + el);
  }
}

// classe filha - Reduce
class Multiplicacao extends Calculo {
  executar(...numeros: number[]): void {
    this.resultado = numeros.reduce((acc, el) => acc * el);
  }
}

console.log("Classe Abstrata:");

const c1 = new Soma();
c1.executar(2, 3, 4, 5);
console.log(c1.getResultado());

const c2 = new Multiplicacao();
c2.executar(2, 3, 4, 5);
console.log(c2.getResultado());
