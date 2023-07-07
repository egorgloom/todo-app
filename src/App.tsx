import React, { useEffect, useState } from 'react';
import './App.css';
import EditTodoForm from './components/EditTodoForm';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';
import { ITodo } from './interface';



function App() {
  const [todos, setTodos] = useState<ITodo[]>([])
  const [value, setValue] = useState<string>('')

  useEffect(() => {
    const savedTodos = JSON.parse(`${localStorage.getItem('todos')}`) || [];
    setTodos(savedTodos);
  }, []);
  
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    if (value) {
      const newTodo = [...todos, { id: Date.now(), task: value, completed: false, isEditing: false }]
      setTodos(newTodo)
      setValue('')
      console.log(newTodo)
      localStorage.setItem('todos', JSON.stringify(newTodo));
    }

  }

  const deleteTodo = (id: number) => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
    localStorage.setItem('todos', JSON.stringify(newTodos))
  }

  const editTodo = (id: number) => {
    const newTodo = todos.map(todo => todo.id === id ? {
      ...todo, isEditing: !todo.isEditing
    } : todo)
    setTodos(newTodo)
  }

  const editTaskForm = (id: number, task: string) => {
    const newTodo = todos.map(todo => todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo)
    setTodos(newTodo)
    localStorage.setItem('todos', JSON.stringify(newTodo));
  }

  const toggleCompleted = (id: number) => {
    const newTodo = todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
    setTodos(newTodo)
    localStorage.setItem('todos', JSON.stringify(newTodo));

  }
  return (
    <div className="TodoWrapper">
      <h1>Get Things Done !</h1>
      <TodoForm handleSubmit={handleSubmit} value={value} setValue={setValue} />
      {todos.map((todo: ITodo) =>
        todo.isEditing ?
          (
            <EditTodoForm todo={todo} key={todo.id} editTaskForm={editTaskForm} />
          )
          :
          (
            <TodoItem
              todo={todo}
              key={todo.id}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
              toggleCompleted={toggleCompleted}
            />
          ))}
    </div>
  );
}

export default App;
