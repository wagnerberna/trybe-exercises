import { LOGIN } from '../consts';

export function loginDados(nome){
  return({
    type: LOGIN,
    payload: {
      nome,
      // username: nome,
      // password: senha,
      // islogged: true,
    }
  })
}
