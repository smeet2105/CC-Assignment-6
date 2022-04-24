import React from 'react';
import ToDo from './Todo';

const ToDoList = ({ toDoList, handleToggle, handleFilter }) => {
  return (
    <div
      style={{
        textAlign: 'center',
        margin: 40,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {toDoList.map((todo) => {
        return (
          <ToDo
            todo={todo}
            handleToggle={handleToggle}
            handleFilter={handleFilter}
          />
        );
      })}
      <button style={{ margin: '20px' }} onClick={handleFilter}>
        Clear Completed
      </button>
    </div>
  );
};

export default ToDoList;
