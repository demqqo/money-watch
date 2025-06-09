import React, {useState, useEffect} from 'react'
import Modal from './modal'

//redux
import { useAppDispatch, useAppSelector } from '../state/hooks';
import {income, expense} from '../state/moneyChange/moneyChangeSlice'
import {CloseModal} from '../state/globalStates/modalComponentSlice'
import type {IncomeCategories, ExpenseCategories} from '../state/moneyChange/moneyChangeSlice'
import { changeCategory } from '../state/globalStates/whatCategorySlice';


type Props = {
    children: string;
    
  };

const ExpenseComponent = ({children}: Props ) => {

function handleSubmit() {
  if (typeOfMoney === 'income') {
    dispatch(income({amount:value, category: children as keyof IncomeCategories }));
  } else {
    dispatch(expense({amount:value, category:children as keyof ExpenseCategories}));
  };
setValue(0);
setOpen(false);
dispatch(CloseModal());
}


    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(0)
    const [debouncedValue, setDebouncedValue] = useState(value);
   
    //optimized value check
    useEffect(() => {
        const timer = setTimeout(() => {
          setDebouncedValue(value);
        }, 500);
        return () => clearTimeout(timer); // cleanup if value changes again
    }, [value]);

      
      //redux logic
      //const expensesTotal = useAppSelector(state => state.moneyChange.expense.Total)
      const dispatch = useAppDispatch();
      const typeOfMoney = useAppSelector((state) => state.isIncomeOrExpenseSlice.type)
      const selectedCategory = useAppSelector((state)=> state.whatCategory.value)
      

      
  return (
    <div>
        <button key={children} onClick={() => (setOpen(true), dispatch(changeCategory(children)))}>{children}</button>
        <Modal isOpen={open} onClose={() => setOpen(false)}>
        <h2>Add Expense</h2>
        <input onChange={(e) => setValue(Number(e.target.value))} placeholder="enter amount"></input>
        <button 
        onClick={()=>handleSubmit()}>
            Confirm
          </button>
      </Modal>
        </div>
  )
}

export default ExpenseComponent
