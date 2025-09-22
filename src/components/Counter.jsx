import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increaseby1, decreaseby1, increaseby10, decreaseby10 } from '../redux/counterSlice'

const Counter = () => {
 const count = useSelector((state)=>state.counter)
 const dispatch = useDispatch();
 return (
    <div>
        <h3>{count}</h3>
        <button className='btn' onClick={()=>dispatch(increaseby1())}>IncreaseBy1</button>
        <button className='btn' onClick={()=>dispatch(decreaseby1())}>DecreaseBY1</button>
        <button className='btn' onClick={()=>dispatch(increaseby10())}>IncreaseBy10</button>
        <button className='btn' onClick={()=>dispatch(decreaseby10())}>DecreaseBY10</button>
    </div>
  )
}

export default Counter