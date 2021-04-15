import React, { useState } from 'react';

export const TodoForm: React.FC = () => {
  const [ title, setTitle ] = useState<string>('')
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault()
  };
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  }
  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      setTitle("");
    }
  }


  return (
    <div className="row mt2">
    <form onSubmit={submitHandler} className="col s12">
      <div className="row">
        <div className="input-field">
          <i className="material-icons prefix">mode_edit</i>
          <input 
            onKeyPress={keyPressHandler} 
            value={title} 
            onChange={changeHandler} 
            id="icon_prefix2" 
            type="text"
          />
          <label htmlFor="icon_prefix2"> Введите название дела </label>
        </div>
      </div>
    </form>
  </div>
  )
}