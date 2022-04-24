import React from 'react';

const ToDo = ({ todo, handleToggle }) => {
  const handleClick = (e) => {
    e.preventDefault();
    handleToggle(e.currentTarget.id);
  };

  return (
    <div
      id={todo.id}
      key={todo.id + todo.task}
      name='todo'
      value={todo.id}
      onClick={handleClick}
      className={todo.complete ? 'todo strike' : 'todo'}
      style={{
        border: '1px solid black',
        width: '400px',
        margin: 5,
        padding: 5,
      }}
    >
      {todo.task}
    </div>
  );
};

export default ToDo;
