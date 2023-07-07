import React, { FC, useState } from 'react';
import { ITodo } from './../interface';

interface IEditTodoForm {
    todo: ITodo
    editTaskForm: (id: number, task: string) => void
}

const EditTodoForm: FC<IEditTodoForm> = ({ todo, editTaskForm }) => {
    const [value, setValue] = useState<string>(todo.task);

    const handleSubmitForm = (event: React.FormEvent) => {
        event.preventDefault()
        editTaskForm(todo.id, value)
    }
    return (
        <div>
            <form onSubmit={handleSubmitForm} className="TodoForm">
                <input
                    className="todo-input"
                    type="text"
                    placeholder='What is the task today?'
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <button type='submit' className='todo-btn'>Add Task</button>
            </form>
        </div>
    );
};

export default EditTodoForm;