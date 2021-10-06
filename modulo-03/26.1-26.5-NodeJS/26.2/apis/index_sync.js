const axios = require("axios");

const getAllCharacters = async (list, next) => {
	const url = "https://swapi-trybe.herokuapp.com/api/people/?format=json";
	try {
		const { data } = await axios.get(url);
		const results = data.results;
		return results;
	} catch (error) {
		console.error(`${error.code}: ${error.message}`);
	}
	
};

const run = async () => {
	try {
		const characters = await getAllCharacters();
		characters.map((character, index) => {
			console.log(index + ': ' + character.name);
		});
	} catch (error) {
		console.error(`${error.code}: ${error.message}`);
	}
};

run();