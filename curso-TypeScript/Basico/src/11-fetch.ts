console.log("fetch API:");
// fetch API / Arrow / async - await
const fetchApi01 = async (url: string) => {
  try {
    const endpoint = url;
    const dataInfo = await fetch(endpoint);
    const dataJson = await dataInfo.json();
    console.log(dataJson);
    console.log(dataJson.results);
    const { results } = dataJson;
    return results;
  } catch (error) {
    console.log(`Erro API01: ${error}`);
  }
};

// fetch API / FN Normal  / async - await
async function fetchApi02(url: string) {
  try {
    const endpoint = url;
    const dataInfo = await fetch(endpoint);
    const dataJson = await dataInfo.json();
    console.log(dataJson);
    console.log(dataJson.results);
    const { results } = dataJson;
    return results;
  } catch (error) {
    console.log(`Erro API02: ${error}`);
    return error;
  }
}

// fetch API / Arrow / .then
const fetchApi03 = (url: string) => {
  return fetch(url)
    .then((res) => res.json())
    .then((data) => data.results)
    .catch((error) => console.log(`Erro API03: ${error}`));
};

// // fetch API / Fn Normal / .then
async function fetchApi04(url: string) {
  return fetch(url)
    .then((res) => res.json())
    .then((data) => data.results)
    .catch((error) => console.log(`Erro API04: ${error}`));
}

// FN para chamar API
const rickAndMorty = async (url: string) => {
  try {
    const resultApi = await fetchApi04(url);
    console.log(resultApi);
    console.log(resultApi[0]);
    console.log(resultApi[0].name);
    return resultApi;
  } catch (error) {
    console.log(console.log(`Erro Function rickAndMorty: ${error}`));
    return error;
  }
};

rickAndMorty("https://rickandmortyapi.com/api/character");
