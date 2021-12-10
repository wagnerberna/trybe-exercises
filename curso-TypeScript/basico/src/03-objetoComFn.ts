// objeto func. c/ array de strings dos superv.
// c/ Fn bater ponto
console.log("desafio:");
// definir o tipo da variável depois atribui valor }={
const funcionario: {
  supervisores: string[];
  baterPonto: (horas: number) => string;
} = {
  supervisores: ["Wagner", "Aline"],
  baterPonto(horario: number): string {
    if (horario <= 8) return "Ponto Normal";
    return "Passou do horário";
  },
};
console.log(funcionario);
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(9));
