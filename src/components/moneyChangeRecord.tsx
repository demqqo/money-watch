import React, {useState, useEffect} from 'react'
import Modal from './modal'
import { useAppDispatch, useAppSelector } from '../state/hooks';
import {income, expense} from '../state/moneyChange/moneyChangeSlice'
import {OpenModal, CloseModal} from '../state/globalStates/modalComponentSlice'

type Props = {
    children: React.ReactNode;
    
  };

const ExpenseComponent = ({children}: Props ) => {
const expenseTotal = useAppSelector((state) => state.moneyChange.expense.Total)
function handleSubmit() {
  if (typeOfMoney === 'income') {
    dispatch(income(value));
  } else {
    dispatch(expense(value));
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
      const expensesTotal = useAppSelector(state => state.moneyChange.expense.Total)
      const dispatch = useAppDispatch();
      const typeOfMoney = useAppSelector((state) => state.isIncomeOrExpenseSlice.type)
      
      useEffect(()=>{
        
      }, [debouncedValue])
  return (
    <div>
        <button onClick={() => setOpen(true)}>{children}</button>
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
