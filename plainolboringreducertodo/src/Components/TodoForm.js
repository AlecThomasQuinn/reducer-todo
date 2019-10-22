import React, { useReducer, useState } from 'react';
import { reducer, initialState } from '../Reducers';

function TodoForm() {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [newTask, setNewTask] = useState();

    console.log(state);

    const handleChanges = e => {
        setNewTask(e.target.value);
      };

    const handleSubmit = e => {
        e.preventDefault();
        setNewTask("");
        dispatch({type: 'ADD_TODO', payload: newTask})
        console.log(state);
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <button >Clear All</button>
            <input 
                type='text'
                value={newTask}
                name='task'
                onChange={handleChanges}
            /> 
            <button type='submit'>Submit</button>
        </form>
     );
}

export default TodoForm;
