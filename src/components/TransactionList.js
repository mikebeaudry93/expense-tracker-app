import React, {useContext}from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Transaction } from './Transaction'

export const TransactionList = () => {

    const context = useContext(GlobalContext)
    // destructured 
    const { transactions } = useContext(GlobalContext);

    console.log(context.transactions)

    return (
        <>
            <h3>History</h3>
            <ul id="id" className="list">
                {transactions.map(transaction => (<Transaction key={transaction.id} transaction = {transaction}/>))}
            </ul>
        </>
    )
}
