import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from '../Main';

import '../../fonts/style.css';
import './style.scss';

function App() {
  return (
    <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Main />} />
            </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
