//For/In
//01
//02
console.log("01 Objetos");
let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente:"Não",
};
//Atribui valor:
info.recorrente = "Sim";
console.log(`Bem Vinda: ${info.personagem}`);
console.table(info);

//03 For In 
console.log("03 For In - chaves:");
for(let key in info) {
  console.log(key);
}
//04 For In 
console.log("04 For In - Valores:");
for(let key in info) {
  console.log(info[key]);
}
//05 Novo objeto
console.log("05 Novo Objeto");
let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente:"Sim",
};
console.table(info2);

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
     return primos;
 }
 let numprimo = 7;
 numerosPrimos(numPrimo);
