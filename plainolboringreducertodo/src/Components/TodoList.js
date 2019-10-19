import React, { useReducer } from 'react';
import { reducer, initialState } from '../Reducers';

import Todo from './Todo'

function TodoList() {
    const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="list">
      <h2>Things that I don't want to do (but will I GUESS)</h2>
      {state.map(todo =>
        <Todo item={todo.item} />)}
    </div>
  );
}

export default TodoList;