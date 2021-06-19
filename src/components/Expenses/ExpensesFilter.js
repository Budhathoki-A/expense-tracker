import React from 'react';
import './ExpensesFilter.css';

const ExpensesFilter = () => {
  const dropdownChangeHalder = (event) => {
    props.onChangeFilter(event.target.value);
  };
  return (
    <div className='expense-filter'>
      <div className='expense-filter__control'>
        <label>Filter By Year</label>
        <select value={props.selected} onChange={dropdownChangeHalder}>
          <option value='2022'></option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
