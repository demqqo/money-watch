import './style/expensesList.scss'
import {expenseCategories}  from '../data/expenseCategories'
import ExpenseComponent from './moneyChangeRecord'
import Modal from './modal'
import { useAppSelector, useAppDispatch} from '../state/hooks';
import {OpenModal, CloseModal} from '../state/globalStates/modalComponentSlice'
import { ChangeToExpense, ChangeToIncome } from '../state/globalStates/expenseOrIncomeSlice';
import { incomeCategories } from '../data/incomeCategories';


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
