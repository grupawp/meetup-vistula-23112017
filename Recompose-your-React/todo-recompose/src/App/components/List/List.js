import React from 'react';

const List = ({ list, handleRemove }) => (
  <ul>
    {
      list.map(({ id, text }) => (
        <li key={id}>
          {text}
          <button onClick={handleRemove(id)}>X</button>
        </li>
      ))
    }
  </ul>
)

export default List;