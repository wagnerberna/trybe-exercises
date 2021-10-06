const fs = require('fs');
const path = require('path');
const util = require('util');

const readDir = util.promisify(fs.readdir);
const readFile = util.promisify(fs.readFile);

/**
 * Vamos usar essa função pra deixar o código um pouco mais limpo
 * Ela recebe o caminho da pasta e o nome do arquivo, e retorna uma promise
 * que será resolvida para um objeto com o nome e conteúdo do arquivo
 */
function readFileWithName(folderPath, fileName) {
  return readFile(path.join(folderPath, fileName)).then((fileContent) => ({
    [fileName]: fileContent.toString('utf8'),
  }));
}

async function readFolder(folderPath) {
  return await new Promise((resolve, reject) => {
    readDir(folderPath)
      /**
       * Primeiro, passamos por todos os nomes de arquivo, chamando nossa function `readFileWithName` definida ali em
       * cima.
       */
      .then((fileNames) => fileNames.map((fileName) => readFileWithName(folderPath, fileName)))
      // Depois, aguardamos até que todas as nossas promises sejam resolvidas
      .then((filePromises) => Promise.all(filePromises)) 
      /**
       * Uma vez que tenhamos todos os arquivos com seus nomes e conteúdo, utilizamos um reduce pra transformar
       * o array de objetos que foi retornado das nossas promises em um único objeto de resultado
       */
      .then((files) => {
        const result = files.reduce((file, result) => {
         return { ...result, ...file }; // Concatenamos cada objeto do array a um novo objeto, que será usado como resultado
        }, {});
        resolve(result); // Depois de montar nosso objeto com os resultados, chamamos o resolve, para que esse objeto seja enviado á pessoa que está consumindo a função
      });
  });
}

module.exports = readFolder;