import './App.css';
import React, { useState } from "react";
import { FormTodo } from './components/FormTodo';
import { Todo } from './components/Todo';

function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "This is a sample todo",
      isDone: false
      }
    ]);
  const [dones,setDones] = useState([]);
  
  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };
  
  const markTodo = index => {
    const newTodos = [...todos];
    const todo = newTodos[index];
    todo.isDone = true;
    setDones([...dones, todo]);
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <h1>Todo List</h1>
      <div className='container'>
        <div className='todolist'>
          <FormTodo addTodo={addTodo} />
          <div >
            {todos.map((todo,index) => (
             <p>
                  <Todo
                  key={Todo+index}
                  index={index}
                  todo={todo}
                  markTodo={markTodo}
                  />
              </p>
            ))}
          </div>
        </div>
        <div className='donelist'>
            <h3>done</h3>
            <p>this todo is done</p>
            <p>
              {dones.map(dones => {
                return(
                  <div>{dones.text}</div>
                )
              })} 
            </p>
        </div>
      </div>
    </div>
  );
}

export default App;