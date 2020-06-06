import React, {createContext, useReducer} from 'react';

// Initial state

const intialState = {
    transaction: [
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 1, text: 'Bookl', amount: -10 },
        { id: 2, text: 'Camera', amount: 150 },
    ]
}

// Create Context 
export const GlobalContext = createContext(intialState);

// Provider Component 
export const GlobalProvider = ({ children }) => {

}