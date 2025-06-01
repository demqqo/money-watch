import { useAppDispatch, useAppSelector} from '../state/1hooks.ts';
import {increment, decrement, incrementByAmount} from '../state/counter/1counterSlice.ts';
import {useState} from 'react'
  
 const Counter = () => {
  const count = useAppSelector(state => state.counter.value)
  const dispatch = useAppDispatch();
  const [amount, setAmount] = useState(0)
  return (
    
    <div>
      <h2>
        {count}
        </h2>
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
        <input className="button" type="number" placeholder="enter amount" onChange={e=>setAmount(Number(e.target.value))}></input>
        <button onClick={() => dispatch(incrementByAmount(amount))}>increment by amount</button>
        </div>
  )
}

export default Counter