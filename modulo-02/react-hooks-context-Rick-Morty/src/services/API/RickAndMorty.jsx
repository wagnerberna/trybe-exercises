import React from 'react';

const getRickAPI = async () => {
  const endpoint = 'https://rickandmortyapi.com/api/character';
  const dataInfo = await fetch(endpoint);
  const dataJson = await dataInfo.json();
  const { results } = dataJson;
  return results;
}

export default getRickAPI;