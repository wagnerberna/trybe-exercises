//6 Número Primo:
console.log("06 Verificação de número primo: ");
function numerosPrimos(numTestar) {
     let resultado = false;
     for (let numeroAtual = 2; numeroAtual < numTestar; numeroAtual += 1) {
        let divisores = 0;
         for (let divisor = 2; divisor < numeroAtual; divisor+= 1) {
             if (numeroAtual % divisor === 0) {
                 divisores += 1; 
             }
         }
         if (divisores === 1) {
             resultado = true;
         }
     }
     return resultado;
 }
 let numPrimo = 7;
 console.log(numerosPrimos(numPrimo));

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
 console.log("02 Maior número do vetor: ");
 let vetorNumeros = [2, 3, 6, 7, 10, 1];
 
 function maxValor(vetorTeste) {
  let resultado;
  vetorTeste.sort((a,b) => a - b);
  let numMaior = vetorTeste[vetorTeste.length -1];
  resultado = numMaior;
  return resultado;
}
console.log(maxValor(vetorNumeros));

//03 Menor valor do array:
console.log("03 Menor número do vetor: "); 
vetorNumeros = [2, 3, 6, 7, 10, 1];
 function minValor(vetorTeste) {
  let resultado;
  vetorTeste.sort((a,b) => b - a);
  let numMaior = vetorTeste[vetorTeste.length -1];
  resultado = numMaior;
  return resultado;
}
console.log(minValor(vetorNumeros));


//04 Vetor nome com mais caracteres.
console.log("04 Nome com mais caracteres do Vetor: ");
let vetorNomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function vetorMaiorNome(vetorTeste) {
    let resultado;
    let maiorNome = "";
    for (let nomeAtual = 0; nomeAtual < vetorTeste.length; nomeAtual += 1) {    
      let nomeComparar = vetorTeste[nomeAtual];
      for (let count in vetorTeste) {
        let nomeComparar2 = vetorTeste[count];
        if (nomeComparar.length >= nomeComparar2.length && maiorNome.length <= nomeComparar.length) {
          maiorNome = nomeComparar;
        } else if (nomeComparar2.length >= nomeComparar.length && maiorNome.length <= nomeComparar2.length) {
          maiorNome = nomeComparar2;
        }
      }
    }
      resultado = maiorNome;
    return resultado;
}
console.log(vetorMaiorNome(vetorNomes));


//05 num que mais se repete no vetor
vetorNumeros = [2, 3, 2, 5, 8, 2, 3];
 console.log("05 Quantidade de números repetidos no vetor: ");
function numMaisRepete(vetorNumeros) {
  let resultado;
  let vezesRepet = 0;
  let repetidoMais;
  for (let count = 0; count < vetorNumeros.length; count += 1) {
    numComparar = vetorNumeros[count];
    let quantNum = 0;
    for (let count in vetorNumeros) {
      if (numComparar == vetorNumeros[count]) {
        quantNum += 1;
      }
    }
    if (quantNum > vezesRepet) {
      vezesRepet = quantNum;
      repetidoMais = numComparar;
    }
  }
  resultado = repetidoMais;
  return resultado;
}
console.log(numMaisRepete(vetorNumeros));

// 6 Soma todos números de 1 até N
console.log("soma de todos números do vetor de 1 até N");
function somaVetorN(n) {
  let resultado;
  let vetor1N = [];
  let soma = 0;
  for(let count = 1; count <= n; count += 1) {
   vetor1N.push(count);
 }
 for(let count in vetor1N) {
   soma += vetor1N[count]; 
 }
 resultado = soma;
 return resultado;
}
console.log(somaVetorN(5));



