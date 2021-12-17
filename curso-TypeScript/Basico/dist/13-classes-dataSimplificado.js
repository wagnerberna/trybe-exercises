"use strict";
class DataSimplificado {
    // construtor inicializa as variáveisp/ instância da classe
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
console.log("Classes:");
// "new" criar objeto instância da classe
const aniversarioFilho = new DataSimplificado(29, 1, 1983);
console.log(aniversarioFilho.dia);
aniversarioFilho.dia = 30;
console.log(aniversarioFilho.dia);
const casamentoPais = new DataSimplificado();
console.log(casamentoPais);
