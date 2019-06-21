import React from "react";
import "./App.css";
import produce from 'immer';
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

  const nextTodos = produce(todos, draft => {
    draft.push({text: ""})
  })

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
