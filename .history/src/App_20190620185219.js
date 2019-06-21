import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ImmerTest from "./components/ImmerTest";

function App() {

  const todos = [
    {
      text: "learn immer",
      done: false
    },
    
  ]

  return (
    <div className='App'>
      <header className='App-header'>
        <ImmerTest />
      </header>
    </div>
  );
}

export default App;
