import React from 'react';

export const initialState = [
    {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  }
]

export function reducer(state, action){
    switch (action.type){
        case 'ADD_TODO':
            return [... state, action.payload]
        default: 
            return state;
    }
        
}