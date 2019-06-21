import React, { useReducer, useState } from "react";
import "./App.css";
import produce from "immer";
import ImmerTest from "./components/ImmerTest";
import { useImmer } from "use-immer";

function App() {
  const [todos, updateTodos] = useImmer([
    {
      text: "learn immer",
      done: false
    },
    {
      text: "simplify all code",
      done: false
    }
  ]);

  function addTodo(obj) {
    updateTodos(draft => {
      draft.push(obj);
    });
  }

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
            
          }}
        >
          Click Me
        </button>
      </header>
    </div>
  );
}

export default App;
