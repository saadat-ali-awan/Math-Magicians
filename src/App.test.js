import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const result = render(<App />);
  const linkElement = result.container.querySelector('.result');
  expect(linkElement).toBeInTheDocument();
});
