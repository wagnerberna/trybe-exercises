class Produto {
  constructor(
    public nome: string,
    public preco: number,
    public desconto: number = 0
  ) {}
  // add método de classe "FN" ao produto, public default opcional
  // this se refere a um atributo do objeto, sem é um parâmetro
  public resumo(): string {
    return `${this.nome} custa R$${this.preco} (${this.desconto * 100}% off)`;
  }
}

const prod1 = new Produto("Caneta", 2.25);
prod1.desconto = 0.05;

console.log(prod1);
console.log(prod1.resumo());

const prod2 = new Produto("Caderno", 5.0, 0.25);

console.log(prod2);
console.log(prod2.resumo());
