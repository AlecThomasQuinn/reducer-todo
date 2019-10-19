import React, { useReducer } from 'react';
import { reducer, initialState } from '../Reducers';

function TodoForm() {
    const [state, dispatch] = useReducer(reducer, initialState)


    return ( 
        <form >
            <button >Clear All</button>
            <input 
                type='text'
                value={state.task}
                name='task'
                onChange={this.handleChanges}
            /> 
            <button>Submit</button>
        </form>
     );
}

export default TodoForm;
