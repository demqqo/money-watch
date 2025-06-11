import {useState, useEffect} from 'react'
import axios from 'axios'
import './style/expensesList.scss'
import {expenseCategories}  from '../data/expenseCategories'
import ExpenseComponent from './moneyChangeRecord'
import Modal from './modal'
import { useAppSelector, useAppDispatch} from '../state/hooks';
import {OpenModal, CloseModal} from '../state/globalStates/modalComponentSlice'
import { ChangeToExpense, ChangeToIncome } from '../state/globalStates/expenseOrIncomeSlice';
import { incomeCategories } from '../data/incomeCategories';

  
const ExpensesList = () => {
    //const [open, setOpen] = useState(false);
    
    const open = useAppSelector((state) => state.globalState.isOpen)
    const dispatch = useAppDispatch();
    const expense = useAppSelector((state) => state.moneyChange.expense.Total);
    const income = useAppSelector((state)=> state.moneyChange.income.Total)
    const typeOfMoney = useAppSelector((state) => state.isIncomeOrExpenseSlice.type)

    //backend logic
    const [incomesDb, setIncomes] = useState([])
    const [expensesDb, setExpenses] = useState([])

    function handleDelete(itemToDelete: number) {
      axios.delete(`http://localhost:3000/expenses/${itemToDelete}`)
      
    }

    function handleEdit() {
      axios.delete
    }

    useEffect(()=>{
      axios.get(`http://localhost:3000/incomes`).then(response=>{
       setIncomes(response.data)
      }) .catch(error => {
        console.error('Error fetching items:', error);
      })
    
      axios.get(`http://localhost:3000/expenses`).then(response=>{
       setExpenses(response.data)
      }) .catch(error => {
        console.error('Error fetching items:', error);
      })
    }, [typeOfMoney])
    
    
  return (
    <div style={{ display: 'flex', gap: '1rem', width: '500px'}}>
    <div className="list">
    <button onClick={() => (dispatch(OpenModal()), dispatch(ChangeToExpense()))}>Add expense</button>
        <div className="elementOfList">
          <div className="flexBox">
          
          <div className="contentOfElement">
            <div>
            Total expense
            </div>
            <div>
              {expense}
              </div>
              
              </div>
          
            </div>
          </div>
        {expensesDb != undefined && expensesDb.length > 0 ? (
  expensesDb.map((item:any) => (
        

     
    <div key={item.id} className="elementOfList">
          <div className="flexBox">
          <div className='deleteEditButton'>
          <div onClick={()=>handleDelete(item.id)}>❌</div>
          <div onClick={()=>handleEdit()}>✏️</div>
            </div>
          <div className="contentOfElement">
            <div>
              
            {item.name}
            </div>
            <div>
              {item.value}
              </div>
              
              </div>
          
            </div>
          </div>
    
    
  ))
) : (null
)}
        

        <Modal isOpen={open} onClose={() => dispatch(CloseModal())}>
  {(typeOfMoney === 'income' ? incomeCategories : expenseCategories).map((item) => (
    //@ts-ignore
    <ExpenseComponent key={item.category}>{item.category}</ExpenseComponent>
  ))}
</Modal>
           
        

    </div>
    <div className="list">
    <button onClick={() => (dispatch(OpenModal()), dispatch(ChangeToIncome()))}>Add income</button>

    <p>Total income: {income}</p>
    {incomesDb != undefined ? (
  incomesDb.map((item) => (
    //@ts-ignore
    <p key={item.name}> {item.name}: {item.value}
    </p>
  ))
) : (
  null
)}
    
    
       
    

</div>
</div>
  )
}

export default ExpensesList
