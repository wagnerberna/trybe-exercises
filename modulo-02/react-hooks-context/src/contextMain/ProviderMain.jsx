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

  async function getResultRickAPI() {
      const resultAPI = await getRickAPI();
      setResultRickAPI(resultAPI);
    }

  useEffect(() => {
    getResultRickAPI();
  }, []);
  
  const handleLogin = ({ target: { name, value } }) => {
    setLogin({
      ...login,
      [name]: value,
    })
  }
  
  const allContext = {
    login,
    handleLogin,
    logged,
    setLogged,
    resultRickAPI,

  };
  return(
    <ContextMain.Provider value={ allContext }>
      { children }
    </ContextMain.Provider>
  )
}

export default ProviderMain;
//okkkkkkkk