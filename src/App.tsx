import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { ITodo } from './interfaces';

const App: React.FC = () => {
  const [ todos, setTodos ] = useState<ITodo[]>([]);

  const addHandler = (title: string) => {
    const newTodo = {
      title: title,
      id: Date.now(),
      completed: false,
    }
    setTodos(pre => [newTodo, ...pre])
  };

  const toggleHandler = (id: number) => {
    console.log('toggle', id);
    
  }

  const removehandler = (id: number) => {
    console.log('remode', id);
  }

  return (
    <>
      <Navbar/>
      <div className="container">
        <TodoForm onAdd={addHandler} />
        <TodoList todos={todos} onToggle={toggleHandler} onRemove={removehandler} />
      </div>
    </>
  );
}

export default App;
