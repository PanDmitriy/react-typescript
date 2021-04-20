import React, { useEffect, useState } from 'react';
import { ITodo } from '../../interfaces';
import { TodoForm } from '../TodoForm';
import { TodoList } from '../TodoList';

declare var confirm: (question: string) => boolean

export const TodosPage: React.FC = () => {

  const [ todos, setTodos ] = useState<ITodo[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]');
    setTodos(saved)
  }, []);

  useEffect(() => {
    localStorage.setItem('todos',JSON.stringify(todos));
  }, [todos])

  const addHandler = (title: string) => {
    const newTodo = {
      title: title,
      id: Date.now(),
      completed: false,
    }
    setTodos(prev => [newTodo, ...prev])
  };

  const toggleHandler = (id: number) => {
    setTodos(todos.map( todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        };
      return todo;
    }));
    
  };

  const removeHandler = (id: number) => {
    const shoudRemove = confirm('Вы действительно хотите удалить?') // windos.confirm() //
    if (shoudRemove) {
      setTodos(prev => prev.filter(todo => todo.id !== id));
    }
  };

  return (
    <>
      <TodoForm onAdd={addHandler} />
      <TodoList todos={todos} onToggle={toggleHandler} onRemove={removeHandler} />
    </>
  )
}