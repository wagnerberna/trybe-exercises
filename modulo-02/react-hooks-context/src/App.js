import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Contents from './route/Content';

import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Contents />
    </BrowserRouter>
  );
}

export default App;
