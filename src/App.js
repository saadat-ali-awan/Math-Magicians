import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './pages/home';
import CalculatorPage from './pages/calculator';
import Quote from './pages/quote';
import NavMenu from './components/NavMenu';

class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <div className="backdrop" />
        <NavMenu />
        <Routes>
          <Route path="/quote" element={<Quote />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
