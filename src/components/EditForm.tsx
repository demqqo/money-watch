import {useState} from 'react'
import Modal from './modal'
import axios from 'axios'

import { useAppSelector, useAppDispatch} from '../state/hooks';
import {CloseModal} from '../state/globalStates/modalComponentSlice'
import { Refresh } from '../state/globalStates/helpers';
const EditForm = (props:any) => {
    
    const dispatch = useAppDispatch();
    const open = useAppSelector((state) => state.globalState.isOpen)
    function handleSubmit(value: number) {
        axios.put(`http://localhost:3000/${props.categoryToChange}/${props.id}`, {
            value: value,
          })
          console.log(props)
        dispatch(Refresh())
        dispatch(CloseModal())
        
       
    }
    
    const [input, setInput] = useState(0)
   
  return (
    <div>
        
        <Modal isOpen={open} onClose={()=> (dispatch(Refresh()), dispatch(CloseModal()))}>
        <h2>Enter new amount</h2>
        <input onChange={(e) => setInput(Number(e.target.value))} placeholder="enter amount"></input>
        <button 
        onClick={()=>handleSubmit(input)}>
            Confirm
          </button>
      </Modal>
    </div>
  )
}

export default EditForm