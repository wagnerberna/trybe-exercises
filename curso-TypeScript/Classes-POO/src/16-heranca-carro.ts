class Ferrari extends Carro {
  constructor(modelo: string, velocidadeMaxima: number) {
    super("Ferrari", modelo, velocidadeMaxima);
  }

  public acelerar(): number {
    return this.alterarVelocidade(20);
  }
  public frear(): number {
    return this.alterarVelocidade(-15);
  }
}

console.log("Ferrari Herança Classe Carro:");
const f40 = new Ferrari("F40", 324);
console.log(f40.acelerar());
console.log(f40.acelerar());
console.log(f40.frear());
console.log(f40);
