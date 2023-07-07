import React, { FC } from 'react';
import { ITodo } from './../interface';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


interface ITodoItem {
    todo: ITodo
    deleteTodo: (e: number) => void
    editTodo: (id: number) => void
    toggleCompleted: (id: number) => void
}

const TodoItem: FC<ITodoItem> = ({ todo, deleteTodo, editTodo, toggleCompleted }) => {
    return (
        <div className="Todo">
            <p className={`${todo.completed ? 'completed' : ''}`} onClick={() => toggleCompleted(todo.id)}>{todo.task}</p>
            <div>
                <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(todo.id)} />
                <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(todo.id)} />
            </div>
        </div>
    );
};

export default TodoItem;