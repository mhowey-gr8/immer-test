import React, { useReducer, useState } from "react";
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

  let nextTodos = produce(todos, draft => {
    draft.push({ text: "Push onto draft..", done: false });
  });

  return (
    <div className='App'>
      <header className='App-header'>
        <ImmerTest />
        <ul>
          {nextTodos.map(todo => {
            return <li>{todo.text}</li>;
          })}
        </ul>
        <input type='text' />
        <button
          onClick={() => {
            console.log(nextTodos);
            nextTodos = produce(nextTodos, draft => {
              draft.push({ text: "added with a button!", done: false });
            });
          }}
        >
          Click Me
        </button>
      </header>
    </div>
  );
}

export default App;
