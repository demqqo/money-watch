
//redux imports
import { useAppDispatch } from '../state/hooks'
import { useAppSelector } from '../state/hooks'

import { Refresh } from '../state/globalStates/helpers'
import { CloseModal } from '../state/globalStates/modalComponentSlice'
import {changeFilter} from '../state/globalStates/filterSlice'
//

//components
import Modal from './modal'

const FilterForm = (props: any) => {


const dispatch = useAppDispatch()
const open = useAppSelector((state)=> state.globalState.isOpen)
const oneMonthInMs = 30 * 24 * 60 * 60 * 1000;
const sevenDaysInMs = 7 * 24 * 60 * 60 * 1000;
const sixMonthsInMs = 6 * 30 * 24 * 60 * 60 * 1000;


  return (
    <div>filterForm
    <Modal isOpen={open} onClose={()=> (dispatch(Refresh()), dispatch(CloseModal()))}> 
        <div className={"list"}>
            <h2>show list for last</h2>
            <button onClick={()=>(dispatch(changeFilter(sevenDaysInMs)), dispatch(CloseModal()))}>7 days</button>    
            <button onClick={()=>(dispatch(changeFilter(oneMonthInMs)), dispatch(CloseModal()))}>1 month</button>    
            <button onClick={()=>(dispatch(changeFilter(sixMonthsInMs)), dispatch(CloseModal()))}>6 months</button>    
        </div>    
    </Modal></div>
  )
}


export default FilterForm
