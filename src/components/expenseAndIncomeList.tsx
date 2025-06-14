import {useState, useEffect} from 'react'
import axios from 'axios'
import './style/expensesList.scss'

//components
import Modal from './modal'
import AddForm from './AddForm'
import EditForm from './EditForm'

//redux imports
import { useAppSelector, useAppDispatch} from '../state/hooks';
import {OpenModal, CloseModal, AddExpense, AddIncome, EditValue} from '../state/globalStates/modalComponentSlice'
import { Refresh } from '../state/globalStates/helpers'
import Dropdown from './dropdaown'


const ExpensesList = () => {
    
    //redux
    const dispatch = useAppDispatch();
    const open = useAppSelector((state) => state.globalState.isOpen)
    const expense = useAppSelector((state) => state.moneyChange.expense.Total);
    const income = useAppSelector((state)=> state.moneyChange.income.Total)
    const typeOfMoney = useAppSelector((state) => state.isIncomeOrExpenseSlice.type)
    const mode = useAppSelector((state) => state.globalState.mode)
    const refreshTriger = useAppSelector((state) => state.refreshTrigerSlice.value)

    //backend logic
    const [incomesDb, setIncomes] = useState<[]>([])
    const [expensesDb, setExpenses] = useState<[]>([])
    const [idToChange, setIdToChange] = useState<number>()
    const [categoryToChange, setCategoryToChange] = useState<any>(null)
    var [totalIncome, setTotalIncome] = useState<number>(0)
    var [totalExpense, setTotalExpense] = useState<number>(0)

    //DELETE method
    function handleDelete(
      itemToDelete: number, 
      categoryToDelete: string
    ){
      axios.delete(`http://localhost:3000/${categoryToDelete}/${itemToDelete}`)
      dispatch(Refresh())
    }


    //GET method
    useEffect(()=>{
      axios.get(`http://localhost:3000/incomes`)
        .then(response=>{
        setIncomes(response.data)
        const total = response.data.reduce((acc: number, item: any) => acc + item.value, 0);
      setTotalIncome(total);
      }) 
        .catch(error => {
        console.error('Error fetching items:', error);
      })
      
      axios.get(`http://localhost:3000/expenses`)
      .then(response=>{
       setExpenses(response.data)
       const total = response.data.reduce((acc: number, item: any) => acc + item.value, 0);
       setTotalExpense(total);
      }) 
      .catch(error =>{
        console.error('Error fetching items:', error);
      })
    }, [typeOfMoney, refreshTriger])
    
    //modal
  function editHandle(
    itemToEdit: number,
    value: 'expenses'|'incomes'
  ){
    setIdToChange(itemToEdit)
    setCategoryToChange(value)
    dispatch(EditValue())
    ModalContentManager()
  }

  function ModalContentManager(){
    dispatch(OpenModal())
    
  }

  function filterHandler(){
    console.log('filterLogic')
  }

  return (
    <div style={{ display: 'flex', gap: '1rem', width: '500px'}}>
    <div className="list">
    <button className="regular-button"
      onClick={() => 
      (dispatch(
        AddExpense()), 
        ModalContentManager()
        )}>
          Add expense
    </button>
    
    <div>
    <button className="filterButton" onClick={()=>{filterHandler()}}>Filter</button>
        <div className="elementOfList">
          <div className="flexBox">
          
          <div className="contentOfElement">
            <div>
            Total expense
            </div>
            <div>
              {totalExpense}
              </div>
              
              </div>
          
            </div>
          </div>
        {expensesDb != undefined && expensesDb.length > 0 ? (
  expensesDb.map((item:any) => (
        
   <div key={item.id} className="elementOfList">
          <div className="flexBox">
          <div className='deleteEditButton'>
          <div onClick={()=>
            handleDelete(
              item.id, 
              'expenses'
              )}>
                ❌
            </div>
          <div onClick={()=>(
            editHandle(
              item.id, 
              'expenses'
              ))}>
                ✏️
                </div>
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
)}</div>
        

        <Modal isOpen={open} onClose={() => 
          (dispatch(Refresh()),
          dispatch(CloseModal()))
          }>
        {mode === 'add-income' && <AddForm type="income" />}
        {mode === 'add-expense' && <AddForm type="expense" />}
        {mode === 'edit-value' && <EditForm 
          id={idToChange} 
          categoryToChange={categoryToChange}
          />}
        </Modal>
           
        

    </div>
    <div className="list">
    <button className="regular-button"
      onClick={()=>(
      dispatch(AddIncome()), 
      ModalContentManager())
      }>
        Add income
      </button>

    <div className="elementOfList">
          <div className="flexBox">
          
          <div className="contentOfElement">
            <div>
            Total income
            </div>
            <div>
              {totalIncome}
              </div>
              
              </div>
          
            </div>
          </div>
    {incomesDb != undefined ? (
  incomesDb.map((item:any) => (
    <div key={item.id} className="elementOfList">
          <div className="flexBox">
          <div className='deleteEditButton'>
          <div onClick={()=>
            handleDelete(
              item.id, 
              'incomes'
              )}>
                ❌
                </div>
          <div onClick={()=>(
            editHandle(
              item.id, 
              'incomes'
              ))}>
                ✏️
            </div>
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
) : (
  null
)}
    
    
       
    

</div>
</div>
  )
}

export default ExpensesList
