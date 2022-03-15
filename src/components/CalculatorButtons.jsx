import React from 'react';
import ButtonsRow from './ButtonsRow';

class CalculatorButtons extends React.PureComponent {
  buttonsRows = [
    ['AC', '+/-', '%', '/'],
    ['7', '8', '9', 'x'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];

  render() {
    return this.buttonsRows.map((row) => (
      <ul className="row" key={`item-${Math.random()}`}><ButtonsRow btns={row} /></ul>
    ));
  }
}

export default CalculatorButtons;
