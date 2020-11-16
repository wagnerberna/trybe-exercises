let listaEstados = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"];


function criaListaEstados() {
for (let estado of listaEstados) {
    let elOpcoes = document.createElement('option');
    elOpcoes.innerText = estado;
    elOpcoes.value = estado;
    console.log(elOpcoes);
    document.getElementById('estados').appendChild(elOpcoes);
  }
}
criaListaEstados();

//validar data na hora de enviar add envento ao botão
let botaoenviar = document.getElementById('btnEnviar');

botaoenviar.addEventListener('click', function(event) {
  //previne evento padrão
  event.preventDefault();
  let data = document.getElementById('dataTexto').value;
  //Split função q divide a data em um array usando separador '/'
  let dataArray = data.split('/')
  //converter datas do array em numeros
  let dia = parseInt(dataArray[0]);
  let mes = parseInt(dataArray[1]);
  let ano = parseInt(dataArray[2]);
  //código menos complexo: usar variáveis para armazenar validações
  //exclamação verifica se é inválido, se nenhuma verificação for verdadeira vai apresentar um erro.
  if (!(dia > 0 && dia <= 31 && mes > 0 && mes <= 12 && ano > 0)) {
      console.log('Erro no formato da data!');
  }
});

//validar inputs de texto:
let inputsText = document.querySelectorAll('input[type=text]');

for (let index = 0; index < inputsText.length; index += 1) {
  let input = inputsText[index];
  if (input.required) {
    if (input.value === '') {
      console.log('erro');
    }
  }
}

