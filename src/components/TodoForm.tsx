import React, { useRef } from 'react';
import { ITodoFormProps } from '../interfaces';


export const TodoForm: React.FC<ITodoFormProps> = props => {
  const ref = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
  };
  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      props.onAdd(ref.current!.value);
      ref.current!.value = '';
    };
  };


  return (
    <div className="row mt2">
    <form 
      onSubmit={submitHandler} 
      className="col s12">
      <div className="row">
        <div className="input-field">
          <i className="material-icons prefix">mode_edit</i>
          <input
            ref={ref}
            onKeyPress={keyPressHandler} 
            id="icon_prefix2" 
            type="text"
          />
          <label htmlFor="icon_prefix2"> Введите название дела </label>
        </div>
      </div>
    </form>
  </div>
  );
};