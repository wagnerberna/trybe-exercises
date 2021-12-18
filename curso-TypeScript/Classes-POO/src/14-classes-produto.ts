class Produto {
  constructor(
    public nome: string,
    public preco: number,
    public desconto: number = 0,
    public precoTotal: number
  ) {}
  // add método de classe "FN" ao produto, public é default é opcional colocar
  // this se refere a um atributo do objeto, sem é um parâmetro
  public resumo(): string {
    this.precoComDesconto();
    return `${this.nome} custa R$${this.preco} (${this.desconto * 100}% off)
    Valor com desconto: ${this.precoTotal}`;
  }
  precoComDesconto(): void {
    const valorDesconto = this.preco * this.desconto;
    this.precoTotal = this.preco - valorDesconto;
  }
}

const prod1 = new Produto("Caneta", 2.25);
prod1.desconto = 0.05;

console.log(prod1);
console.log(prod1.resumo());

const prod2 = new Produto("Caderno", 5.0, 0.15);

console.log(prod2);
console.log(prod2.resumo());
