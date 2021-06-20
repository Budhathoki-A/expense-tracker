import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const [displayForm, setDisplayForm] = useState(null);

  const FormForNewExpenses = () => {
    return <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />;
  };

  return (
    <div className='new-expense'>
      {displayForm && <FormForNewExpenses />}
      {displayForm !== true && (
        <button onClick={() => setDisplayForm(true)}>
          Add New Expenses Here
        </button>
      )}
    </div>
  );
};

export default NewExpense;
