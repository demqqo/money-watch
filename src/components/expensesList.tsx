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
    <div>
        <h2>Expenses List</h2>
            {expenseCategories.map((item, index)=>(
            <ExpenseComponent key={item.category}>{item.category}</ExpenseComponent>
        ))}
        

    </div>
  )
}

export default ExpensesList
