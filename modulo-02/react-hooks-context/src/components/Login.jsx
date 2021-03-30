import React, { useContext } from 'react';
import { Redirect } from 'react-router';
import ContextMain from '../contextMain/ContextMain';

function Login() {
  const { login, handleLogin, logged, setLogged } = useContext(ContextMain);
  // console.log(ContextMain);

  function btnLoginCheck(email, age) {
    const ageMin = 12;
    const ageMinCheck = (age >= ageMin);
    const emailCheck = (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email));
    if (ageMinCheck || emailCheck) return false;
    return true;
  }

  const handleClick = () => {
    setLogged(true);
  }

  return(
    <>
      { logged ? <Redirect to="/RickWorld" /> : false }
      <form className="form">
        <label>
          e-mail:
          <input
            type="text"
            placeholder="Digite seu e-mail"
            name="email"
            value={ login.email }
            onChange={ handleLogin }
          />
        </label><br />
        <label>
          Idade:
          <input
            type="number"
            placeholder="Digite sua Idade"
            name="age"
            value={ login.age }
            onChange={ handleLogin }
          />
        </label>
        <button
          type="button"
          disabled={ btnLoginCheck(login.email, login.age) }
          onClick={ handleClick }
          >
          Entrar
        </button>
      </form>
    </>
  )
}

export default Login;
//okkkkkkk