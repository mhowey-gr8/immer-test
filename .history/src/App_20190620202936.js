import React, { useReducer, useState, useRef } from "react";
import "./App.css";
// import produce from "immer";
import ImmerTest from "./components/ImmerTest";
import { useImmer } from "use-immer";

function App() {
  const inputEl = useRef(null);
  const [todos, updateTodos] = useImmer([
    {
      id: 1,
      text: "learn immer",
      done: false
    },
    {
      id: 2,
      text: "simplify all code",
      done: false
    },
    {
      id: 3,
      text: "simplify all code",
      done: false
    },
    {
      id: 4,
      text: "simplify all code",
      done: false
    }
  ]);
  const [state, dispatch] = useReducer(reducer, []);
  function reducer(state, action) {
    console.log("in reducer!", state);
    switch (action.type) {
      case "add":
        updateTodos(draft => {
          draft.push({ name: "test", done: false });
        });
        return;
      case "decrement":
        return { count: state.count - 1 };
      default:
        throw new Error();
    }
  }

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
              dispatch({ type: "add", payload: todoobj });
              //addTodo(todoobj);
              inputEl.current.value = "";
            }}
          >
            Add Todo
          </button>
        </form>
        <button
          onClick={() => {
            // clearTodos();
          }}
        >
          Clear Todos
        </button>
      </header>
    </div>
  );
}

export default App;
