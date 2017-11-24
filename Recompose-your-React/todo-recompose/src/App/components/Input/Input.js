import React from 'react';

const Input = ({ input, handleChange, handleClick }) => [
  <input
    key="input"
    type="text"
    value={input}
    onChange={handleChange}
  />,
  <button
    key="button"
    onClick={handleClick}
  >
    Add
  </button>
]

export default Input;