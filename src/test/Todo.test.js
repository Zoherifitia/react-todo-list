import React from 'react';
import renderer from 'react-test-renderer';
import { Todo } from '../components/Todo';
describe('Todo component', () => {
  it('renders correctly', () => {
    const Todo = jest.fn();
    const tree = renderer
      .create(<Todo />)
      .toJSON();
    console.log(tree)
    expect(tree).toMatchSnapshot();
  });
});