import React, { useState } from 'react';
import TodoTaskContainer from './TodoTaskContainer';

const TodoForm = ({ todos, addTask, removeTask }) => {
  const [value, setValue] = useState('');

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onClick = () => {
    if (!value) {
      return;
    }
    addTask(value);
    setValue('');
  };

  return (
    <div>
      <input
        className="w-2/4 px-5 py-1.5 text-[#222222] text-left sm:w-72"
        type="text"
        value={value}
        onChange={onChange}
      />
      <input
        className="px-5 py-1.5 bg-[#1c94d9] duration-150 cursor-pointer hover:bg-[#0081e7]"
        type="button"
        value="Add"
        onClick={onClick}
      />
      <TodoTaskContainer todos={todos} removeTask={removeTask} />
    </div>
  );
};

export default TodoForm;
