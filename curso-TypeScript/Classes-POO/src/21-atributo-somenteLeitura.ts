// Atributo somente leitura: atributo só é escrito 1x

class Aviao {
  public readonly modelo: string;
  constructor(modelo: string, public readonly prefixo: string) {
    this.modelo = modelo;
  }
}

// erro ao atribuir
const turboHelice = new Aviao("Tu-114", "PT-ABC");
turboHelice.modelo = "zzzz";
turboHelice.prefixo = "yyyy";
console.log(turboHelice);
