import React from 'react';
import PropTypes from 'prop-types';
import ButtonsRow from './ButtonsRow';

class CalculatorButtons extends React.PureComponent {
  buttonsRows = [
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', 'x'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];

  render() {
    const { onClick } = this.props;
    return this.buttonsRows.map((row) => (
      <ul className="row" key={`item-${Math.random()}`}><ButtonsRow btns={row} onClick={onClick} /></ul>
    ));
  }
}

CalculatorButtons.propTypes = { onClick: PropTypes.func };

CalculatorButtons.defaultProps = { onClick: () => {} };

export default CalculatorButtons;
