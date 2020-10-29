//Bonus 01:
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
console.log("Exercício B01 Ordenar vetor ordem Crescente");
numbers.sort((a, b) => a - b); 
console.log(numbers);


//Bonus 02:
console.log("Exercício B02 Ordenar vetor ordem Decrescente");
numbers.sort((a, b) => b - a); 
console.log(numbers);



//Bonus 03:
numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
console.log("Exercício B03 Multiplicar itens do vetor pelo próximo número");
let vetorMultiplicado = [];
let resultadoMultiplicacao;
for (count = 0; count < numbers.length; count += 1) {
    if (count == numbers.length -1) {
        vetorMultiplicado.push((numbers[count]*2));
    } else {
        vetorMultiplicado.push((numbers[count])*(numbers[count + 1]));
    }
}
console.log (vetorMultiplicado);
console.log("fim");
