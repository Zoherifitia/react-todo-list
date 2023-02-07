import React from 'react';
import renderer from 'react-test-renderer';
import { FormTodo } from "../components/FormTodo"

describe('FormTodo component', () => {
  it('renders correctly', () => {
    const addTodo = jest.fn();
    const tree = renderer
      .create(<FormTodo addTodo={addTodo} />)
      .toJSON();
    console.log(tree)
    expect(tree).toMatchSnapshot();
  });
});