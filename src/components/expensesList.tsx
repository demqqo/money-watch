import './style/expensesList.scss'
import {expenseCategories}  from '../data/expenseCategories'
import ExpenseComponent from './moneyChangeRecord'
import Modal from './modal'
import { useAppSelector, useAppDispatch} from '../state/hooks';
import {OpenModal, CloseModal} from '../state/globalStates/modalComponentSlice'
import { ChangeToExpense, ChangeToIncome } from '../state/globalStates/expenseOrIncomeSlice';
import { incomeCategories } from '../data/incomeCategories';


const ExpensesList = () => {
    
    const open = useAppSelector((state) => state.globalState.isOpen)
    const dispatch = useAppDispatch();
    const expense = useAppSelector((state) => state.moneyChange.expense.Total);
    const income = useAppSelector((state)=> state.moneyChange.income.Total)
  return (
    <div style={{ display: 'flex', gap: '1rem', width: '500px'}}>
    <div className="list">
        <h2>Expenses List</h2>
        <p>{expense}</p>
        <button onClick={() => (dispatch(OpenModal()), dispatch(ChangeToExpense()))}>Add expense</button>

        <Modal isOpen={open} onClose={() => dispatch(CloseModal())}> {expenseCategories.map((item)=>(
            <ExpenseComponent key={item.category} >{item.category}</ExpenseComponent>
        ))}</Modal>
           
        

    </div>
    <div className="list">
    <h2>Income List</h2>
    <p>{income}</p>
    <button onClick={() => (dispatch(OpenModal()), dispatch(ChangeToIncome()))}>Add income</button>

    <Modal isOpen={open} onClose={() => dispatch(CloseModal())}> {incomeCategories.map((item)=>(
        <ExpenseComponent key={item.category}>{item.category}</ExpenseComponent>
    ))}</Modal>
       
    

</div>
</div>
  )
}

export default ExpensesList
