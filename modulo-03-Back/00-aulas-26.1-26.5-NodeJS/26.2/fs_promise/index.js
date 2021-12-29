const fs = require("fs");
// const simpsons = require('./simpsons.json');

// simpsons.forEach((simpson, index) => {
//     console.log(`Índice: ${index}`);
//     console.log(`Personagem: ${simpson.id}: ${simpson.name}`);
// });

// GET

// function getFile() {
//     fs.promises.readFile("./musica.txt", "utf8")
//         .then(content => {
//             console.log(content);
//         }).catch(error => {
//             console.error(error.message);
//         });

//     console.log('\nToda Forma de Poder - Engenheiros do Havaí\n');
// }

// getFile();

// async function getFile() {
//   try {
//     const content = await fs.promises.readFile("./musica.txt", "utf8");
//     console.log(content);
//     console.log('\nToda Forma de Poder - Engenheiros do Havaí\n');
//   } catch (error) {
//     console.log(error);
//   }
// }

// getFile();

// SET
// function setFile(message) {
//     fs.promises.writeFile("./historias.txt", message, "utf8")
//         .then(content => {
//             console.log('Salvo com sucesso!');
//         }).catch(error => {
//             console.error(error.message);
//         });
// }

// setFile('Era uma vez...');

function setFile(index, newName) {
    simpsons[index].name = newName;
    fs.promises.writeFile('./simpsons.json', JSON.stringify(simpsons), "utf8")
        .then(content => {
            console.log('Salvo com sucesso!');
        }).catch(error => {
            console.error(error.message);
        });
}

setFile(2,'Bartholomew Simpson');