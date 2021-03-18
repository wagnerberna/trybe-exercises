import { LOGIN } from '../consts';

const INITIAL_STATE = {
  username: '',
  // password: '',
  isLogged: false
}

function userEstado(state = INITIAL_STATE, action){
  switch(action.type){
    case LOGIN:
      return { ...state,
        username: action.payload.nome,
        // password: action.payload.password,
        isLogged: true,
      }
    default:
      return state;
  }
}

export default userEstado;