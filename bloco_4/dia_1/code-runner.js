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
//07.


