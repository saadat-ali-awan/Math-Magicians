import React from 'react';
import './App.css';
import Calculator from './components/Calculator';

class App extends React.PureComponent {
  render() {
    return (
      <main className="App">
        <Calculator />
      </main>
    );
  }
}

export default App;
