// Atributo somente leitura

class Aviao {
  public readonly modelo: string;
  constructor(modelo: string, public readonly prefixo: string) {
    this.modelo = modelo;
  }
}

// erro ao reatribuir
const turboHelice = new Aviao("Tu-114", "PT-ABC");
turboHelice.modelo = "zzzz";
turboHelice.prefixo = "yyyy";
console.log(turboHelice);
