import React, { useState } from 'react';
import calculate from '../logic/calculate';
import CalculatorButtons from './CalculatorButtons';
import Result from './result';
import './calculator.css';

function Calculator() {
  const [calculations, setCalculations] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const [result, setResult] = useState('0');

  const createResultString = (calculations) => {
    let result = '';
    if (calculations.total) {
      result += `${calculations.total}`;

      if (calculations.operation) {
        result += ` ${calculations.operation}`;

        if (calculations.next) {
          result += ` ${calculations.next}`;
        }
      }
    } else if (calculations.next) {
      result += ` ${calculations.next}`;
    } else {
      result = '0';
    }
    return result;
  };

  const changeResult = async (buttonName) => {
    setCalculations((prevCalculations) => {
      if (buttonName === '=') {
        if (!prevCalculations.next || !prevCalculations.total) {
          return prevCalculations;
        }
      }
      const newCalculation = calculate(calculations, buttonName);
      setResult(createResultString(newCalculation));
      return newCalculation;
    });
  };

  return (
    <div className="calculator-layout">
      <Result result={result} className="result" />
      <CalculatorButtons onClick={changeResult} />
    </div>
  );
}

export default Calculator;
