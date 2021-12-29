// Getters e Setters: acessa como atributo
class Pessoa {
  private _idade = 0;

  get idade(): number {
    return this._idade;
  }
  set idade(valor: number) {
    if (valor >= 0 && valor <= 120) {
      this._idade = valor;
    }
  }
}

console.log("Getters e Setters:");
const pessoa1 = new Pessoa();
pessoa1.idade = 10;
console.log(pessoa1);
pessoa1.idade = -5;
console.log(pessoa1.idade);
