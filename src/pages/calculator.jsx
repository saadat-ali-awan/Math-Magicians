import Calculator from '../components/Calculator';
import CommonLayout from './common-layout';

const CalculatorPage = () => (
  <CommonLayout
    className="calculator"
  >
    <Calculator className="calculator" />
  </CommonLayout>
);

export default CalculatorPage;
