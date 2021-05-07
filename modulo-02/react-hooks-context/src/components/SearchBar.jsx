import React, { useContext } from 'react';
import ContextMain from '../contextMain/ContextMain';

function SearchBar() {
  const { inputSearchName, setInputSearchName } = useContext(ContextMain);

  return(
    <form className="forms">
      <span>Buscar:</span>
      <input
        type="text"
        name="inputSearchName"
        value={ inputSearchName }
        onChange={ (e) => setInputSearchName(e.target.value) }
      />
    </form>
  )
}

export default SearchBar;