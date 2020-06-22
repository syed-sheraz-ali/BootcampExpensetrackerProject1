import React from 'react';
import './App.css';
import Child from './child';
import {TransactionProvider} from './transactionContext';

function App() {
  return (
    <div >
      <TransactionProvider>
     <Child />
     </TransactionProvider>
    </div>
  );
}

export default App;
