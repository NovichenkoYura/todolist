import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AddTodo } from './components/AddTodo';
import { TodoList } from './components/TodoList';

function App() {
  return (
    <div className="app">
      <AddTodo/>
      <TodoList key={0} id={0} titleValue={''} descriptionValue={''}/>
    </div>
  );
}

export default App;
