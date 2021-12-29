// Modificadores de Acesso: Public / Private
class Carro {
  private velocidadeAtual = 0;

  constructor(
    public marca: string,
    public modelo: string,
    private velocidadeMaxima: number = 200
  ) {}

  protected alterarVelocidade(delta: number): number {
    const novaVelocidade = this.velocidadeAtual + delta;
    const velocidadeValida =
      novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;
    if (velocidadeValida) {
      this.velocidadeAtual = novaVelocidade;
    } else {
      this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
    }
    return this.velocidadeAtual;
  }
  public acelerar(): number {
    return this.alterarVelocidade(5);
  }
  public frear(): number {
    return this.alterarVelocidade(-5);
  }
}

console.log("Classe Carro:");
const carro1 = new Carro("Ferrari", "C300", 250);
console.log(carro1.acelerar());
console.log(carro1.acelerar());
console.log(carro1.acelerar());
console.log(carro1.frear());
console.log(carro1.acelerar());

Array(50)
  .fill(0)
  .forEach(() => console.log(carro1.acelerar()));
console.log(carro1.acelerar());
console.log(carro1);
Array(60)
  .fill(0)
  .forEach(() => console.log(carro1.frear()));
console.log(carro1.frear());
