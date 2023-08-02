"use client"

import { MdOutlineRadioButtonUnchecked, MdOutlineRadioButtonChecked } from 'react-icons/md'
import { IoMdClose } from 'react-icons/io'
import { useState } from 'react'

const Todo = ({ todo }) => {
    const [isChecked, setIsChecked] = useState(false)

    return (
        <div>
            { !isChecked ?
                    <div className="flex justify-between my-2 px-3">
                        <div className="flex items-center">
                            <MdOutlineRadioButtonUnchecked size={15} className="text-slate-200 cursor-pointer" />
                            <p className="text-slate-200 ml-2">{todo.text}</p>
                        </div>
                    <IoMdClose size={15} className="text-slate-200 cursor-pointer" />
                    </div>
                :
                    <div className="flex justify-between my-2 px-3">
                        <div className="flex items-center">
                            <MdOutlineRadioButtonChecked size={15} className="text-slate-200 cursor-pointer" />
                            <p className="text-gray-700 ml-2">{todo.text}</p>
                        </div>
                    <IoMdClose size={15} className="text-slate-700 ml-5 cursor-pointer" />
                    </div>
            }
            
        </div>
    )
}

export default Todo