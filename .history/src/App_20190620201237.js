import React, { useReducer, useState, useRef } from "react";
import "./App.css";
import produce from "immer";
import ImmerTest from "./components/ImmerTest";
import { useImmer } from "use-immer";

function App() {
  const inputEl = useRef(null);

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

  // let nextTodos = produce(todos, draft => {
  //   draft.push({ text: "Push onto draft..", done: false });
  // });

  return (
    <div className='App'>
      <header className='App-header'>
        <ImmerTest />
        <ul>
          {todos.map(todo => {
            return <li>{todo.text}</li>;
          })}
        </ul>
        <form onSubmit={e => e.preventDefault()}>
          <input type='text' ref={inputEl} />
          <button
            type='submit'
            onClick={() => {
              const todoobj = {
                text: inputEl.current.value,
                done: false
              };
              addTodo(todoobj);
              inputEl.current.value = "";
            }}
          >
            Add Todo
          </button>
        </form>
        <button
          onClick={() => {
            clearTodos();
          }}
        >
          Clear Todos
        </button>
      </header>
    </div>
  );
}

export default App;
