import React from 'react';
import CalculatorButtons from './CalculatorButtons';
import Result from './result';

class Calculator extends React.Component {
  header = () => <div>Good</div>;

  render() {
    return (
      <div>
        <Result result={0} className="result" />
        <CalculatorButtons />
      </div>
    );
  }
}

export default Calculator;
