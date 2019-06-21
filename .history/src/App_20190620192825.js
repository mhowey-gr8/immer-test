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

  function addTodo() {
    updateTodos(draft => {
      draft.push({ text: "Push into Draft from a function!", done: false });
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
