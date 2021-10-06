const axios = require('axios');

axios.get('https://ghibliapi.herokuapp.com/filmes')
    .then((response) => {
        console.log('\nProcessando nossa lista de filme...\n');
        let movies = response.data;
        movies.forEach(movie => {
            console.log(`(${movie['release_date']}) ${movie['title']}`);
        })
    }).catch((error) => {
        const { response } = error;
        console.error(`\n(${response.status}) ${response.statusText}`);
    });

console.log('\nFilmes do Estúdio Ghibli');