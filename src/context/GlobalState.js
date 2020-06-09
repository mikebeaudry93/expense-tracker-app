import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

// Initial state

const intialState = {
    transactions: [
    ],
}

// Create Context 
export const GlobalContext = createContext(intialState)

// Provider Component 
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, intialState)

    // Actions 
    function deleteTransaction (id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    function addTransaction (transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        income: state.income,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
}