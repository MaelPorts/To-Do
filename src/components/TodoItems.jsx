import React from 'react'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import delete_icon from '../assets/delete.png'

const TodoItems = ({text, id, isComplete, deleteTask, toggleTask}) => {
  return (
    <div className='flex items-center my-3 gap-2'>
        <div onClick={()=>{toggleTask(id)}} className='flex flex-1 items-center cursor-pointer'>
            <img src={isComplete ? tick : not_tick} alt="" className='w-7'/>
            <p className={`ml-4 text-[17px] ${isComplete ? 'text-green-600 line-through' : 'text-slate-700'}`}>
              {text}
            </p>
        </div>
      <img onClick={()=>{deleteTask(id)}} src={delete_icon} alt="" className='w-3.5 cursor-pointer' />
    </div>
  )
}

export default TodoItems
