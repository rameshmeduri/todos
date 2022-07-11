import React, { useState } from 'react';
import TodoForm from './TodoForm';

const TodoMain = () => {
  const [todos, setTodos] = useState([]);

  const addTask = (task) => {
    const newTodos = [...todos, { task }];
    setTodos(newTodos);
  };

  const removeTask = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <h1 className="text-4xl font-bold uppercase mb-8">Todo</h1>
      <TodoForm todos={[...todos]} addTask={addTask} removeTask={removeTask} />
    </>
  );
};

export default TodoMain;
