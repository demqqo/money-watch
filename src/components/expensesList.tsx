import React from 'react'
import {expenseCategories}  from '../data/expenseCategories'
import ExpenseComponent from './expenseComponent'


const ExpensesList = () => {
    
  return (
    <div>
        <h2>Expenses List</h2>
            {expenseCategories.map((item, index)=>(
            <ExpenseComponent key={item.category}>{item.category}</ExpenseComponent>
        ))}
        

    </div>
  )
}

export default ExpensesList
