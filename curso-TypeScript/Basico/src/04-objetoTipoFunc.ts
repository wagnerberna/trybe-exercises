// Criar o tipo "Alias" p/ ser reutilizado:
type Funcionario = {
  supervisores: string[];
  baterPonto: (horas: number) => string;
};

const funcionario01: Funcionario = {
  supervisores: ["Hevanir", "Ivone"],
  baterPonto(horario: number): string {
    if (horario <= 8) return "Ponto Normal";
    return "Passou do horário";
  },
};

console.log("Objeto tipo funcionário:");
console.log(funcionario01);
console.log(funcionario01.supervisores);
console.log(funcionario01.baterPonto(9));
