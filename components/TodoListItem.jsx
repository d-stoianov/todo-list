"use client"

import { MdOutlineRadioButtonUnchecked, MdOutlineRadioButtonChecked } from 'react-icons/md'
import { IoMdClose } from 'react-icons/io'
import { FiEdit } from 'react-icons/fi'
import { useEffect, useRef, useState } from 'react'

const TodoListItem = ({ onItemDelete, onItemChecked, onItemEdited, todo }) => {
    const [isChecked, setIsChecked] = useState(todo.isChecked)
    const [isEditing, setIsEdititng] = useState(false)
    const titleInputRef = useRef(null)

    let title = ""

    const saveTitle = (title) => {
        todo.title = title
        onItemEdited(todo)
    }

    const onTitleKeyDown = (e) => {
        if (e.key === "Enter") {
            setIsEdititng(false)
        }
    }

    useEffect(() => {
        if (isEditing) {
            titleInputRef.current.focus()
        }
    }, [isEditing])

    if(isEditing) {
        title = <input 
            onKeyDown={onTitleKeyDown} 
            defaultValue={todo.title} 
            onChange={(e) => {
                saveTitle(e.target.value)
            }}
            ref={titleInputRef}
            className="todo_title">

        </input>
    } else {
        title = <p 
            onClick={() => setIsEdititng(!isEditing)} 
            className={!isChecked ? "text-slate-200 ml-2" : "text-gray-500 ml-2"}>{todo.title}
        </p>
    }

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
                    
                    <div>
                        {title}
                        <p className={(!isChecked ? "text-slate-500" : "text-slate-700") + " ml-2 text-sm"}>{todo.text}</p>
                    </div>
                    
                </div>
                <div className="flex items-center gap-2">
                    <FiEdit onClick={() => setIsEdititng(!isEditing)} size={15} className={!isChecked ? "text-slate-200 cursor-pointer" : "text-gray-700 cursor-pointer"} />
                    <IoMdClose onClick={() => onItemDelete(todo)} size={15} className={!isChecked ? "text-slate-200 cursor-pointer" : "text-gray-700 cursor-pointer"} />
                </div>
            </div>
        </div>
    )
}

export default TodoListItem