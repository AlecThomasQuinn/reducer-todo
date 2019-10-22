import React from 'react';
import './App.css';

//components
import TodoList from './Components/TodoList'
import TodoForm from './Components/TodoForm'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Justaplainolboringreducertodo&#8482;</h1>
      </header>
      <TodoList />
      <TodoForm />
    </div>
  );
}

export default App;
