import React from "react";
import "./App.css";
import product from 'immer'
import ImmerTest from "./components/ImmerTest";

function App() {
  const todos = [
    {
      text: "learn immer",
      done: false
    },
    {
      text: "simplify all code",
      done: false
    }
  ];

  const nextTodos = 

  return (
    <div className='App'>
      <header className='App-header'>
        {todos.map(todo => {
          console.log(todo);
        })}
        <ImmerTest />
      </header>
    </div>
  );
}

export default App;
