//01 Teste Palindromo String:
let palavra = "arara";
console.log("Teste Palindromo", palavra);

function palindromo (palavraTestar) {
    let palavraInvertida = "";
    let resultado;
    for (let letra = palavraTestar.length -1; letra >= 0; letra -= 1) {
        palavraInvertida += palavraTestar[letra];
 }
    if (palavraInvertida === palavraTestar) {
        resultado = "Sim, Sou um Palíndromo";
    } else {
        resultado = "Não, Não sou um Palíndromo";
    }
    return resultado;
 }
 console.log(palindromo(palavra));

 //02 Maior valor do array:
 let vetorNumeros = [2, 3, 6, 7, 10, 1];
 console.log("02 Maior número do vetor: ", vetorNumeros);
 function maxValor(vetorTeste) {
  let resultado;
  vetorTeste.sort((a,b) => a - b);
  let numMaior = vetorTeste[vetorTeste.length -1];
  resultado = numMaior;
  return resultado;
}
console.log(maxValor(vetorNumeros));

//03 Menor valor do array:
 vetorNumeros = [2, 3, 6, 7, 10, 1];
 console.log("03 Menor número do vetor: ", vetorNumeros);
 function minValor(vetorTeste) {
  let resultado;
  vetorTeste.sort((a,b) => b - a);
  let numMaior = vetorTeste[vetorTeste.length -1];
  resultado = numMaior;
  return resultado;
}
console.log(minValor(vetorNumeros));

//04

//05
vetorNumeros = [2, 3, 2, 5, 8, 2, 3];
 console.log("03 Menor número do vetor: ", vetorNumeros);
function numMaisRepete(vetorNumeros) {
  let resultado;
  vetorNumeros.sort((a,b) => a - b);
  //
  let numMaior = vetorNumeros[vetorNumeros.length -1];
  let quantNum = 0;
  for (count = 0; count < vetorNumeros.length; count += 1) {
    if (numMaior == vetorNumeros[count]){
      quantNum += 1;
    }
  }
  resultado = quantNum;
  return resultado;
}
let testeHighest = [15, 9, 8, 15, 2, 7];
highestCount(testeHighest);
