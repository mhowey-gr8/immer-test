import React, { useReducer, useRef } from "react";
import "./App.css";
// import produce from "immer";
import ImmerTest from "./components/ImmerTest";
import { useImmer, useImmerReducer } from "use-immer";

function App() {
  const inputEl = useRef(null);
  const initialState = [];
  const [state, dispatch] = useImmerReducer(reducer, initialState);

  function reducer(draft, action) {
    switch (action.type) {
      case "add":
        draft.push(action.payload);
        return;
      case "clear":
        draft.length = 0;
        return;
      default:
        throw new Error();
    }
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <ImmerTest />
        <ul>
          {state.map(todo => {
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

              inputEl.current.value = "";
              inputEl.current.focus();
            }}
          >
            Add Todo
          </button>
        </form>
        <button
          onClick={() => {
            dispatch({ type: "clear" });
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
