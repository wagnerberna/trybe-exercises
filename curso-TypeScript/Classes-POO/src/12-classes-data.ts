class Data {
  // público por padrão todos podem ter acesso
  dia: number;
  public mes: number;
  ano: number;

  // construtor inicializa as variáveisp/ instância da classe
  // parametro tipado c/ valor padrão:
  // constructor(dia: number = 1, mes: number = 1, ano: number = 1980) {
  constructor(dia = 1, mes = 1, ano = 1970) {
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;
  }
}

console.log("Classes:");
// "new" criar objeto instância da classe
const aniversario = new Data(29, 1, 1983);
console.log(aniversario.dia);
aniversario.dia = 30;
console.log(aniversario.dia);

const casamento = new Data();
console.log(casamento);
