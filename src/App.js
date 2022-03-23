import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';
import Home from './pages/home';
import Calculator from './pages/calculator';
import Quote from './pages/quote';

class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <header>
          <h1>Math Magicians</h1>
          <ul>
            <NavLink
              to="/"
              className={({ isActive }) => `nav-link ${(isActive ? ' selected' : '')}`}
            >
              Home
            </NavLink>
            <NavLink
              to="/calculator"
              className={({ isActive }) => `nav-link ${(isActive ? ' selected' : '')}`}
            >
              Calculator
            </NavLink>
            <NavLink
              to="/quote"
              className={({ isActive }) => `nav-link ${(isActive ? ' selected' : '')}`}
            >
              Quote
            </NavLink>
          </ul>
        </header>
        <Routes>
          <Route path="/quote" element={<Quote />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
