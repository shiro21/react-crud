import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./styles/_reset.scss";
import "./styles/_layout.scss";

// Components
import Main from './components/main/Main';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={`/`} element={ <Main /> } />
      </Routes>
    </Router>
  );
}

export default App;
