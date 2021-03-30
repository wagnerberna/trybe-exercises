import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Contents from './route/Content';

import ProviderMain from './contextMain/ProviderMain';

function App() {
  return (
    <ProviderMain>
      <BrowserRouter>
        <Contents />
      </BrowserRouter>
    </ProviderMain>
  );
}

export default App;
