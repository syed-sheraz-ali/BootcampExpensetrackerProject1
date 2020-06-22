
import React, {createContext, useReducer} from 'react';
import  TransactionReducer from './transReducer';


const   initialtransactions = [
    {amount: 500, desc: "Cash"},
    {amount: -40, desc: "Book"},
    {amount: 100, desc: "Deposit"}
    
]


export const TransactionContext = createContext(initialtransactions);
export  const TransactionProvider = ({children}) =>{
    let [state, dispatch] = useReducer(TransactionReducer, initialtransactions)


    function AddTransaction(transObj){
        dispatch({
            type: "ADD_TRANSACTION",
            payload: {
                amount: transObj.amount,
                desc: transObj.desc
            },
        })
    }

    return(
        <TransactionContext.Provider value={{
            transaction: state,
            AddTransaction: AddTransaction
        }}>
            {children }

        </TransactionContext.Provider>
    )
}













