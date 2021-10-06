import React, { useContext } from 'react';
import ContextMain from '../contextMain/ContextMain'

function BtnLogout() {
  const { setLogged, setLogin } = useContext(ContextMain);
  const clearState = {
    email: "",
    age: "",
  }
  
  const logout = () => {
      setLogin({ ...clearState })
      setLogged(false)
    };

  return (
    <button
      onClick={ logout }
    >
      Sair
    </button>
  )
}

export default BtnLogout;