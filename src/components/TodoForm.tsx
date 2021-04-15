import React from 'react';

export const TodoForm: React.FC = () => {
  
  return (
    <div className="row">
    <form className="col s12">
      <div className="row">
        <div className="input-field">
          <i className="material-icons prefix">mode_edit</i>
          <textarea id="icon_prefix2" className="materialize-textarea"></textarea>
          <label htmlFor="icon_prefix2">First Name</label>
        </div>
      </div>
    </form>
  </div>
  )
}