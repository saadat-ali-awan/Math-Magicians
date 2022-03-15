import React from 'react';
import calculate from '../logic/calculate';
import CalculatorButtons from './CalculatorButtons';
import Result from './result';

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      calculation: {
        total: 0,
        next: null,
        operation: null,
      },
    };
  }

  changeResult = (buttonName) => {
    this.setState((prevState) => {
      if (buttonName === '=') {
        if (prevState.calculation.next === null || prevState.calculation.total === null) {
          return {};
        }
      }
      const newCalculation = calculate(prevState.calculation, buttonName);
      return { calculation: newCalculation };
    });
  }

  render() {
    const { calculation } = this.state;

    let result = '';

    if (calculation.total) {
      result += `${calculation.total}`;

      if (calculation.operation) {
        result += ` ${calculation.operation}`;

        if (calculation.next) {
          result += ` ${calculation.next}`;
        }
      }
    } else if (calculation.next) {
      result += ` ${calculation.next}`;
    } else {
      result = '0';
    }

    return (
      <div>
        <Result result={result} className="result" />
        <CalculatorButtons onClick={this.changeResult} />
      </div>
    );
  }
}

export default Calculator;
