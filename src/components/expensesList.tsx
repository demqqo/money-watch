import './style/expensesList.scss'
import {expenseCategories}  from '../data/expenseCategories'
import ExpenseComponent from './moneyChangeRecord'
import Modal from './modal'
import { useAppSelector, useAppDispatch} from '../state/hooks';
import {OpenModal, CloseModal} from '../state/globalStates/modalComponentSlice'
import { ChangeToExpense, ChangeToIncome } from '../state/globalStates/expenseOrIncomeSlice';
import { incomeCategories } from '../data/incomeCategories';

type ArrayEntry = {
    name: string;
    value: number;
  };

  
const ExpensesList = () => {
    
    const open = useAppSelector((state) => state.globalState.isOpen)
    const dispatch = useAppDispatch();
    const expense = useAppSelector((state) => state.moneyChange.expense.Total);
    const income = useAppSelector((state)=> state.moneyChange.income.Total)
    const incomes = useAppSelector((state)=> state.moneyChange.income)
    const expenses = useAppSelector((state)=> state.moneyChange.expense)
    const typeOfMoney = useAppSelector((state) => state.isIncomeOrExpenseSlice.type)
    
    const expenseData: ArrayEntry[] = Object.entries(expenses)
    .filter(([key]) => key !== 'Total')
    .map(([category, value]) => ({
      name: category,
      value: value as number,
    }))
    .filter((item) => item.value > 0);

    const incomeData: ArrayEntry[] = Object.entries(incomes)
    .filter(([key]) => key !== 'Total')
    .map(([category, value]) => ({
        name: category,
        value: value as number,
    }))
    .filter((item) => item.value > 0)


  return (
    <div style={{ display: 'flex', gap: '1rem', width: '500px'}}>
    <div className="list">
        <h2>Expenses List</h2>
        <p>{expense}</p>
        {expenseData != undefined && expenseData.length > 0 ? (
  expenseData.map((item) => (
    <p key={item.name}>
      {item.name}: {item.value}
    </p>
  ))
) : (null
)}
        <button onClick={() => (dispatch(OpenModal()), dispatch(ChangeToExpense()))}>Add expense</button>

        <Modal isOpen={open} onClose={() => dispatch(CloseModal())}>
  {(typeOfMoney === 'income' ? incomeCategories : expenseCategories).map((item) => (
    //@ts-ignore
    <ExpenseComponent key={item.category}>{item.category}</ExpenseComponent>
  ))}
</Modal>
           
        

    </div>
    <div className="list">
    <h2>Income List</h2>
    <p>{income}</p>
    {incomeData != undefined ? (
  incomeData.map((item) => (
    <p key={item.name}>
      {item.name}: {item.value}
    </p>
  ))
) : (
  null
)}
    <button onClick={() => (dispatch(OpenModal()), dispatch(ChangeToIncome()))}>Add income</button>

    
       
    

</div>
</div>
  )
}

export default ExpensesList
