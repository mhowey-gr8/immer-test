import React from "react";
import logo from "./logo.svg";
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
    draft.push({ text: "added to todos", done: false });
  });

  return (
    <div className='App'>
      <header className='App-header'>
        {todos.map(todo => {})}
        <ImmerTest />
      </header>
    </div>
  );
}

export default App;
