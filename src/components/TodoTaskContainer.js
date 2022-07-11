import React from 'react';
import TodoTask from './TodoTask';

const TodoTaskContainer = ({ todos, removeTask }) => (
  <div className="flex items-center flex-col mt-5">
    {todos.map((todo, index) => (
      <TodoTask key={index} index={index} todo={todo} removeTask={removeTask} />
    ))}
  </div>
);

export default TodoTaskContainer;
