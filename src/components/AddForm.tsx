import React from 'react'
import { incomeCategories } from '../data/incomeCategories';
import {expenseCategories}  from '../data/expenseCategories';
import ExpenseComponent from './moneyChangeRecord'

import { ChangeToExpense, ChangeToIncome } from '../state/globalStates/expenseOrIncomeSlice';
import { useAppSelector, useAppDispatch} from '../state/hooks';

const AddForm = (type: any) => {


    const dispatch = useAppDispatch();
    
    if(type.type === 'expense'){
        dispatch(ChangeToExpense())
      }else{
        dispatch(ChangeToIncome())
      }
    
  return (
    <div>{(type.type === 'income' ? incomeCategories : expenseCategories).map((item) => (
        //@ts-ignore
        <ExpenseComponent key={item.category}>{item.category}</ExpenseComponent>
      ))}</div>
  )
}


export default AddForm