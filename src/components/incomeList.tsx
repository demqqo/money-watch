/*import './style/expensesList.scss'
import {incomeCategories}  from '../data/incomeCategories'
import ExpenseComponent from './moneyChangeRecord'
import Modal from './modal'
import { useAppSelector, useAppDispatch} from '../state/hooks';
import {OpenModal, CloseModal} from '../state/globalStates/modalComponentSlice'
import { ChangeToIncome } from '../state/globalStates/expenseOrIncomeSlice';

const IncomeList = () => {
    const open = useAppSelector((state) => state.globalState.isOpen)
    const dispatch = useAppDispatch();
    const income = useAppSelector((state) => state.moneyChange.income);
  return (
    <div className="list">
        <h2>Income List</h2>
        <p>{income}</p>
        <button onClick={() => (dispatch(OpenModal()), dispatch(ChangeToIncome()))}>Add income</button>

        <Modal isOpen={open} onClose={() => dispatch(CloseModal())}> {incomeCategories.map((item)=>(
            <ExpenseComponent key={item.category} >{item.category}</ExpenseComponent>
        ))}</Modal>
           
        

    </div>
  )
}

export default IncomeList*/