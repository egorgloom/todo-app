import React, { FC } from 'react';

interface ITodoForm {
  value: string;
  handleSubmit: (e: React.FormEvent) => void;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}
const TodoForm: FC<ITodoForm> = ({ handleSubmit, value, setValue }) => {
  return (
    <div >
      <form onSubmit={handleSubmit} className="TodoForm">
        <input
          className="todo-input"
          type="text"
          placeholder='What is the task today?'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type='submit' className='todo-btn' >Add Task</button>
      </form>
    </div>
  );
};

export default TodoForm;