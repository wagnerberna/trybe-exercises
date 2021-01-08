//01
console.log("Exercício 01 quadrado de asteríscos");
let n = 10;
let linhasAsteriscos = "";
let quadradoAsteriscos;
for (let count = 1; count <= n; count += 1) {
    linhasAsteriscos += "*"; 
}     
for (let count = 1; count <= n; count++) {
    quadradoAsteriscos += "\n" + linhasAsteriscos;
}
console.log(quadradoAsteriscos);

//02
console.log("Exercício 02 triângulo de asteríscos esquerda p/ direita");
linhasAsteriscos = "";
let trianguloAsteriscos = "";
for (let count = 1; count <= n; count += 1) {
    linhasAsteriscos += "*";
    trianguloAsteriscos += "\n" + linhasAsteriscos;
}     
console.log(trianguloAsteriscos);

//03
console.log("Exercício 03 triângulo de asteríscos direita p/ esquerda");
linhasAsteriscos = "";
trianguloAsteriscos = "";
let espacosLinha = "";
let finalString = n;
for (let count = 1; count <= n; count += 1) {
    espacosLinha += " ";
}

for (let count = 1; count <= n; count += 1) {
    finalString -= 1; 
    linhasAsteriscos += "*";
    espacosLinha = espacosLinha.substring(0,finalString);
    trianguloAsteriscos += espacosLinha + linhasAsteriscos + ("\n");
}     
console.log(trianguloAsteriscos);

//04
console.log("Exercício 04 triângulo de asteríscos base maior / topo um único *");
linhasAsteriscos = "";
trianguloAsteriscos = "";
espacosLinha = "";
let divisaoEspacos = Math.trunc(n/2);
finalString = divisaoEspacos;
for (let count = 1; count <= divisaoEspacos; count += 1) {
    espacosLinha += " ";
}
for (let count = 1; count <= divisaoEspacos + 1; count += 1) {
    linhasAsteriscos += "*";
    espacosLinha = espacosLinha.substring(0,finalString);
    trianguloAsteriscos += espacosLinha + linhasAsteriscos + ("\n");
    linhasAsteriscos += "*";
    if (finalString > 0) {
        finalString -= 1;
    }
}     
console.log(trianguloAsteriscos);