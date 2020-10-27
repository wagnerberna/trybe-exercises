let a = 10;
let b = 5;
let c = 15;
let resultado;

// 01.Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b, definidas no começo com os valores que serão operados. Faça programas para:
console.log("Exercício01");
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

// 02.Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados.

console.log("Exercício02");
if (a > b) {
    console.log("O maior núméro é: ", a);
} else {
    console.log("o maior número é: ", b);
}

//03.Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.
console.log("Exercício03");
if (a > b && a > c) {
    console.log("O maior núméro é: ", a);
} else if (b > a && b > c) {
    console.log("O maior núméro é: ", b);
} else {
    console.log("O maior núméro é: ", c);
}

//04.Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
console.log("Exercício04");
let numTeste = -5;
if(numTeste < 0) {
    console.log("Número Negativo");
} else if (numTeste > 0) {
    console.log("Número Positivo");
} else {
    console.log("Numero Zero");
}

//05.Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false caso contrário.
//Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus. Caso os ângulos estejam inválidos, o programa deve retornar uma mensagem de erro. 
console.log("Exercício05");
let angulo01 = 50;
let angulo02 = 40;
let angulo03 = 170;
let triangulo;

if(angulo01+angulo02+angulo03 <= 180) {
triangulo = true;
console.log(triangulo);
} else {
    triangulo = false;
    console.log (triangulo);
}

/*06. Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
    Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
    Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
    Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
    Exemplo: bishop -> diagonals */
console.log("Exercício06");
let pecaXadrez = "dama";
pecaXadrez = pecaXadrez.toLowerCase();
console.log("Nome da peça:", pecaXadrez);
switch (pecaXadrez) {
    case "peao":
        console.log("Vertical");
        break;
    case "bispo":
        console.log("Diagonal");
        break;
    case "torre":
        console.log("Vertical e Horizontal");
        break;
    case "cavalo":
        console.log("em L");
        break;
    case "rainha":
        console.log("Vertical, Horizontal e Diagonal")
        break;
    case "rei":
        console.log("Vertical, Horizontal e Diagonal")
        break;
    default:
        console.log ("Esta não é o nome de uma peça de xadrez")
        break;
}
/*07.Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
    Porcentagem >= 90 -> A
    Porcentagem >= 80 -> B
    Porcentagem >= 70 -> C
    Porcentagem >= 60 -> D
    Porcentagem >= 50 -> E
    Porcentagem < 50 -> F */
console.log("Exercício07");
let nota = 45;
if (nota >= 90) {
    nota = "A";
    console.log("nota: ", nota);
} else if (nota >= 80) {
    nota = "B";
    console.log("nota: ", nota);
} else if (nota >= 70) {
    nota = "C";
    console.log("nota: ", nota);
} else if (nota >= 60) {
    nota = "D";
    console.log("nota: ", nota);
} else if (nota >= 50) {
    nota = "E";
    console.log("nota: ", nota);
} else {
    nota = "F";
    console.log("nota: ", nota);
} 
//08.Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.
//    Bonus: use somente um if.

console.log("Exercício08");
if ((a % 2) === 0 || (b % 2) === 0 || (c % 2) === 0) {
    resultado = true;
    console.log("Um dos núméros é par", resultado);
} else {
    resultado = false;
    console.log("Nenhum núméros é par", resultado);
}

//09.Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.
//    Bonus: use somente um if.

console.log("Exercício09");
if ((a % 2) !== 0 || (b % 2) !== 0 || (c % 2) !== 0) {
    resultado = true;
    console.log("Um dos núméros é ímpar", resultado);
} else {
    resultado = false;
    console.log("Nenhum núméros é ímpar", resultado);
}

/*10.Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

    Atente que, sobre o custo do produto, incide um imposto de 20%.
    Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
    O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
        valorCustoTotal = valorCusto + impostoSobreOCusto
        lucro = valorVenda - valorCustoTotal (lucro de um produto) */

console.log("Exercício10");
let custoProduto = 100;
let valorVenda = 200;
let valorImposto = 0.2 * custoProduto;
custoProduto = custoProduto + valorImposto;
let lucroUnitario = valorVenda - custoProduto;
let quantVendas = 1000;
let lucroTotal;
if (custoProduto < 0 || valorVenda < 0) {
    console.log("Valores não podem ser negativos");
} else {
    lucroTotal = lucroUnitario * quantVendas;
    console.log("Total Lucro: ", lucroTotal);
}
console.log("Exercício11");

/*11.Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
        A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
            INSS
                Salário bruto até R$ 1.556,94: alíquota de 8%
                Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
                Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
                Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
            IR
                Até R$ 1.903,98: isento de imposto de renda
                De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
                De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
                De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
                Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
    Exemplo: Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:
        O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
        Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
        Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
        R$ 2.670,00: salário com INSS já deduzido;
        7.5%: alíquota de imposto de renda;
        R$ 142,00 parcela a se deduzir do imposto.
        Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
        O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
    Resultado: R$ 2.612,55.

Dica: que tal identificar as alíquotas com variáveis de nomes explicativos? */

let salarioBruto = 3000
let salarioBase;
let salarioLiquido;
let inss;
let ir;
if (salarioBruto <= 1556.94) {
    inss = salarioBruto * 0.08;
} else if (salarioBruto >= 1556,95 && salarioBruto <= 2594.92) {
    inss = salarioBruto * 0.09;
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    inss = salarioBruto * 0.11;
} else {
    inss = salarioBruto + 570.88;
}
salarioBase = salarioBruto - inss;
if (salarioBase <= 1903.98) {
    ir = 0;
} else if (salarioBase >= 1903.99 && salarioBruto <= 2826.65) {
    ir = (salarioBase * 0.075) - 142.80;
} else if (salarioBase >= 2826.66 && salarioBruto <= 3751.05) {
    ir = (salarioBruto * 0.15) - 354.80;
}else if (salarioBase >= 3751.06 && salarioBruto <= 4664.68) {
    ir = (salarioBase * 0.225) - 636.13;
} else {
    ir = (salarioBase * 0.275) - 869.36;
}
salarioLiquido = salarioBase - ir;
console.log("salario líquido: ", salarioLiquido);









