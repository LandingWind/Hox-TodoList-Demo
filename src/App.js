import React from 'react';
import TodoList from './Components/TodoList'

import './App.css';

function App() {
  return (
    <div className="App" style={{textAlign:"center"}}>
      <h3>The TodoList based on React && Hox</h3>
      <TodoList></TodoList>
    </div>
  );
}

export default App;
