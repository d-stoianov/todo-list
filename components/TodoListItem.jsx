"use client"

import { MdOutlineRadioButtonUnchecked, MdOutlineRadioButtonChecked } from 'react-icons/md'
import { IoMdClose } from 'react-icons/io'
import { FiEdit } from 'react-icons/fi'
import { useState } from 'react'
import TodoEditModal from "./TodoEditModal"

const TodoListItem = ({ onItemDelete, onItemChecked, onItemEdited, todo }) => {
    const [isChecked, setIsChecked] = useState(todo.isChecked)
    const [showModal, setShowModal] = useState(false)

    return (
        <div>
            <div className="flex justify-between my-2 px-3">
                <div className="flex items-center">
                    {
                        !isChecked 
                        ? <MdOutlineRadioButtonUnchecked 
                            onClick={() => {
                                onItemChecked(todo) 
                                setIsChecked(!isChecked)
                                }
                            }
                            size={15}
                            className="text-slate-200 cursor-pointer" />
                        : <MdOutlineRadioButtonChecked onClick={() => {
                            onItemChecked(todo) 
                            setIsChecked(!isChecked)
                            }
                        } 
                        size={15} 
                        className="text-slate-200 cursor-pointer" />
                    }
                    
                    <p className={!isChecked ? "text-slate-200 ml-2" : "text-gray-700 ml-2"}>{todo.title}</p>
                </div>
                <div className="flex items-center gap-2">
                    <FiEdit onClick={() => setShowModal(true)} size={15} className={!isChecked ? "text-slate-200 cursor-pointer" : "text-gray-700 cursor-pointer"} />
                    <IoMdClose onClick={() => onItemDelete(todo)} size={15} className={!isChecked ? "text-slate-200 cursor-pointer" : "text-gray-700 cursor-pointer"} />
                </div>
            </div>
            {
                showModal && <TodoEditModal todo={todo} onItemEdited={onItemEdited} setShowModal={setShowModal} />
            }
        </div>
    )
}

export default TodoListItem