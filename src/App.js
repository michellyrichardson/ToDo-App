import React from 'react';
import './App.css';

import TodoContextProvider from './contexts/TodoContext';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';
import TodoDetails from './components/TodoDetails';
import NewTodo from './components/NewTodo';

function App() {
  return (
    <div className="App">
      
        <TodoContextProvider>
          <Navbar />
          <TodoList />         
          <NewTodo />
        </TodoContextProvider>
      
    </div>
  );
}

export default App;
