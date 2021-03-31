import React, {useState, useEffect } from 'react';
import ContextMain from './ContextMain';
import getRickAPI from '../services/API/RickAndMorty';

function ProviderMain({ children }) {
  
  const [login, setLogin] = useState({
    email:'',
    age:'',
  });
  const [resultRickAPI, setResultRickAPI] = useState([]);
  const [logged, setLogged] = useState(false);
  const [inputSearchName, setInputSearchName] = useState('');
  const [rickFiltered, setRickFiltered] = useState([]);

  async function getResultRickAPI() {
      const resultAPI = await getRickAPI();
      setResultRickAPI(resultAPI);
      setRickFiltered(resultAPI);
  }

  useEffect(() => {
    getResultRickAPI();
  }, []);
  
  useEffect(() => {
    setRickFiltered(searchNameFilter);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputSearchName]);

  const searchNameFilter = 
  resultRickAPI.filter(({ name }) => name.toLowerCase().includes(inputSearchName));


  const allContext = {
    login,
    setLogin,
    logged,
    setLogged,
    resultRickAPI,
    inputSearchName,
    setInputSearchName,
    rickFiltered,
    setRickFiltered,
  };

  return(
    <ContextMain.Provider value={ allContext }>
      { children }
    </ContextMain.Provider>
  )
}

export default ProviderMain;
//okkkkkkkk