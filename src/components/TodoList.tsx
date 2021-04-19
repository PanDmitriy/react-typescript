import React from 'react';
import { ITodoListProps } from '../interfaces'

export const TodoList: React.FC<ITodoListProps> = ({ todos, onToggle, onRemove }) => {
  return (
    <ul>
      {
        todos.map( todo => {
          const classes = ['todo'];
          if(todo.completed) {
            classes.push('completed');
          };
          return (
            <li className={classes.join(' ')} key={todo.id}>
              <label>
                <input type="checkbox" checked={todo.completed} onChange={onToggle.bind(null, todo.id)} />
                <span> {todo.title} </span>
                <i className="material-icons red-text" onClick={onRemove.bind(null, todo.id)} >delete</i>
              </label>
            </li>
          );
        })
      }
      
    </ul>
  );
};