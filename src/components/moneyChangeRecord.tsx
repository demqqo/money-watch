//react library
import {useState, useEffect} from 'react'
import axios from 'axios'

//component
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
  if(!value){
dispatch(CloseModal());
    return

  }
  if (typeOfMoney === 'income') {
    dispatch(income({amount:value, category: children as keyof IncomeCategories }));
  } else {
    dispatch(expense({amount:value, category:children as keyof ExpenseCategories}));
  };
setValue(0);
setOpen(false);
dispatch(Refresh())
dispatch(CloseModal());
//POST METHOD THROUGH AXIOS
const createdAt = Date.now()
axios.post(`http://localhost:3000/${typeOfMoney}s`, {
  name: selectedCategory,
  value: value,
  createdAt: createdAt
}).then(response=>{
  console.log(response.data)
  const readableDate = new Date(response.data.createdAt).toLocaleString();
console.log(readableDate);
}) .catch(error => {
  console.error('Error fetching items:', error);
})
}

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(0)

    //redux logic
          
    const dispatch = useAppDispatch();
    const typeOfMoney = useAppSelector((state) => state.isIncomeOrExpenseSlice.type)
    const selectedCategory = useAppSelector((state)=> state.whatCategory.value)

     
      
  return (
    <div>
        <button onClick={() => (setOpen(true), dispatch(changeCategory(children)))}>{children}</button>
        <Modal isOpen={open} onClose={() => setOpen(false)}>
        <h2>Add Expense</h2>
        <input onChange={(e) => setValue(Number(e.target.value))} placeholder="enter amount" type="number"></input>
        <button 
        onClick={()=>handleSubmit()}>
            Confirm
          </button>
      </Modal>
        </div>
  )
}

export default ExpenseComponent
