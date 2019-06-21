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

  function clearTodos() {
    updateTodos(draft => {
      draft.length = 0;
    });
  }

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
          {todos.map(todo => {
            return <li>{todo.text}</li>;
          })}
        </ul>
        <input type='text' ref='todoinput' />
        <button
          onClick={() => {
            addTodo({ text: "Push into draft from a function!", done: false });
          }}
        >
          Add Todo
        </button>
        <button onClick={() => {
          clearTodos
          }}>Clear Todos</button>
      </header>
    </div>
  );
}

export default App;
