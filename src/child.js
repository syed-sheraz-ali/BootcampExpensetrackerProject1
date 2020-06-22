import React, { useContext, useState } from 'react';
import {TransactionContext}  from './transactionContext';



function Child () {

   let  {transaction , AddTransaction}  = useContext(TransactionContext);


   let [newDesc, setDesc] = useState("");
   let [newAmount, setAmount] = useState(0);

   const handleAddition = (event) => {
       event.preventDefault();
       if(Number(newAmount) ===0){
           alert("Please Enter correct value");
           return false;
       }
      
        AddTransaction({
           amount: Number(newAmount),
           desc: newDesc
       })
   }


   const getIncome = ()=>{
    let income = 0;
    for(var i=0; i< transaction.length; i++){
        if (transaction[i].amount>0)
        income = income + transaction[i].amount
    }
 
    return income;
}

const getExpense = () =>{
    let expense = 0;
    for(var i=0; i<transaction.length; i++){
        if(transaction[i].amount < 0)
        expense += transaction[i].amount
    }
    return expense;
}

 
  return (
    <div className="container">
    <h1 className='text-center'>Expense Tracker</h1>
    <h2 className="your">Your Balance <br/> RS: {getIncome() + getExpense()}</h2>

    <div className="expense-tracker">
        <h3 className="inc">INCOME <br/>RS:{getIncome()}</h3>
        <h3 EXPENSE className="exp"> Expense<br/>RS: {getExpense()}</h3>
    </div>


    <h3 className="his">History </h3>
    <hr  />
    <ul className="trans_history">
        {transaction.map((transObj, ind)=>{
            return(
            <li key={ind}>
            <span>{transObj.desc}</span>
            <span>{transObj.amount}</span>
        </li>


            )}
        )}
        
        

    </ul>

    <h3 className="add">Add new transaction</h3>

    <hr  />
    <form className="transaction-form" onSubmit={handleAddition}>
        <label>
            Enter Description <br/>
            <input type="text" onChange={(ev)=>setDesc(ev.target.value)} required />
        </label>

        <label>
            Enter Amount <br/>
            <input type="number" onChange={(ev)=>setAmount(ev.target.value)} required/>
        </label>
        <br/>
        
        
        

        <input type="submit" value="Add Transaction" className="inp"></input>
        

      
    </form>


    </div>
    
  );
}
export default Child;
