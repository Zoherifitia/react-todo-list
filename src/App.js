import './App.css';
import React, { useState } from "react";

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
  
  //changer en Done et effacer dans todo 
  const markTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setDones([...dones,newTodos[index]])
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  function Todo({ todo, index, markTodo}) {
    return (
      <div>
      <div className="todo" >
        <div className='input'>
          <input type="checkbox" id="index" variant="outline-success" onClick={() => markTodo(index)}/><label for="index" ></label>
          <span >{todo.text}</span>
        </div>
      </div>
      </div>
    );
  }
  
  function FormTodo({ addTodo }) {
    const [value, setValue] = React.useState("");
  
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue("");
    };
  
    return (
      <form onSubmit={handleSubmit}> 
        <div className='todo'>
          <h3>Todo</h3>
          <input type="text" className="input_todo" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo" />
        </div>
        
      </form>
    );
  }

  return (
    <div className="app">
      <h1>Todo List</h1>
      <div className='container'>
        <div className='todolist'>
          <FormTodo addTodo={addTodo} />
          <div>
            {todos.map((todo, index) => (
              <p>
                  <Todo
                  key={index}
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