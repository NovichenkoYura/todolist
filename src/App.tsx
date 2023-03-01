import './App.css';
import { AddTodo } from './components/AddTodo';
// import { Modal } from './components/Modal';
import { TodoList } from './components/TodoList';

export const App = () =>{
  return (
    <div className="app">
      <AddTodo/>
      <TodoList key={0} id={0} titleValue={''} descriptionValue={''} status={false}/>   

    </div>
  );
}

// key={0} id={0} titleValue={''} descriptionValue={''}