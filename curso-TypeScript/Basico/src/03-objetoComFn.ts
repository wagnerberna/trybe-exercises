// objeto func. c/ array de strings dos superv.
// c/ Fn bater ponto
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

console.log("desafio:");
console.log(funcionario);
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(9));
