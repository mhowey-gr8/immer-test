import React from "react";
import "./App.css";
import produce from "immer";
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
    draft.push({ text: "Push onto draft..", done: false });
  });

  return (
    <div className='App'>
      <header className='App-header'>
        <ul>
          {nextTodos.map(todo => {
            return <li>{todo.text}</li>;
          })}
        </ul>
        
      </header>
    </div>
  );
}

export default App;
