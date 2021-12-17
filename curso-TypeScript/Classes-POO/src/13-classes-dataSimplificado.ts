class DataSimplificado {
  // construtor inicializa as variáveisp/ instância da classe
  constructor(
    public dia: number = 1,
    public mes: number = 1,
    public ano: number = 1970
  ) {}
}

console.log("Classes:");
// "new" criar objeto instância da classe
const aniversarioFilho = new DataSimplificado(29, 1, 1983);
console.log(aniversarioFilho.dia);
aniversarioFilho.dia = 30;
console.log(aniversarioFilho.dia);

const casamentoPais = new DataSimplificado();
console.log(casamentoPais);
