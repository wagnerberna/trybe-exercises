"use strict";
console.log("tipo funcionário:");
const funcionario01 = {
    supervisores: ["Hevanir", "Ivone"],
    baterPonto(horario) {
        if (horario <= 8)
            return "Ponto Normal";
        return "Passou do horário";
    },
};
console.log(funcionario01);
console.log(funcionario01.supervisores);
console.log(funcionario01.baterPonto(9));
