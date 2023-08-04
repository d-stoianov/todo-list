"use client"

import { MdOutlineRadioButtonUnchecked, MdOutlineRadioButtonChecked } from 'react-icons/md'
import { IoMdClose } from 'react-icons/io'
import { useState } from 'react'

const TodoListItem = ({ onItemDelete, todo }) => {
    const [isChecked, setIsChecked] = useState(false)

    return (
        <div>
            <div className="flex justify-between my-2 px-3">
                <div className="flex items-center">
                    {
                        !isChecked 
                        ? <MdOutlineRadioButtonUnchecked size={15} className="text-slate-200 cursor-pointer" />
                        : <MdOutlineRadioButtonChecked size={15} className="text-slate-200 cursor-pointer" />
                    }
                    
                    <p className={!isChecked ? "text-slate-200 ml-2" : "text-gray-700 ml-2"}>{todo.title}</p>
                </div>
            <IoMdClose onClick={() => onItemDelete(todo)} size={15} className={!isChecked ? "text-slate-200 cursor-pointer" : "text-gray-700 cursor-pointer"} />
            </div>
            
        </div>
    )
}

export default TodoListItem