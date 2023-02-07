import renderer from 'react-test-renderer';
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { renderIntoDocument } from 'react-dom/test-utils';

/*test('app header rendering', () => {
  render(<App />);
  const linkElement = screen.getByText(/Todo List/i)
  expect(linkElement).toBeInTheDocument();
});*/

describe('render app', () => {
  it('renders correctly', () => {
    const app = jest.fn();
    const tree = renderer
      .create(<App />)
      .toJSON();
    console.log(tree)
    expect(tree).toMatchSnapshot();
  });
});

 