const fs = require('fs');

// const nomeDoArquivo = 'musica.txt';

// try {
//   const data = fs.readFileSync(nomeDoArquivo, 'utf8');
//   console.log(data);
// } catch (error) {
//   console.error(`Erro ao ler o arquivo: ${error.path}`);
// }


fs.readFile('./musica.txt', 'utf-8', (error, content) => {
  if (error) {
  	console.error(`Não foi possível acessar o arquivo: ${error.path}`);
	console.error(`${error.message}`);
	return;
  }

  console.log(`Conteúdo do arquivo: ${content}`);
});






// const getBetterMessage = (error) => {
// 	if (error.code === "ENOENT") return `Arquivo não encontrado: ${error.path}`;

// 	return error.message;
// };

// // fs.readFile("./myfile.txt", "utf-8", (err, content) => {
// 	if (err) return console.error(getBetterMessage(err));

// // 	console.log(`Conteúdo do arquivo: ${content}`);
// // });