const path = require('path');
const util = require('util');
const readFolder = require('../fs-errors/filetest/read-folder');

const readFolderPromise = util.promisify(readFolder);

readFolderPromise(path.join(__dirname, './testfile'))
.then((result) =>{
    //Faz algo com o resultado
})
.catch((err) => {
    //Faz algo com o erro
});