import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const ToDoForm = ({ addTask }) => {
  const [userInput, setUserInput] = useState('');

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput('');
  };
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <TextField
        value={userInput}
        type='text'
        onChange={handleChange}
        placeholder='Enter task...'
      />
      &ensp;&ensp;&ensp;
      <Button variant='contained' style={{ padding: 15 }}>
        Submit
      </Button>
    </form>
  );
};

export default ToDoForm;
