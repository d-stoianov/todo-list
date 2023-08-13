"use client"

import { MdOutlineRadioButtonUnchecked, MdOutlineRadioButtonChecked } from 'react-icons/md'
import { IoMdClose } from 'react-icons/io'
import { FiEdit } from 'react-icons/fi'
import { useEffect, useRef, useState } from 'react'

const TodoListItem = ({ onItemDelete, onItemChecked, onItemEndEditing, onItemBeginEditing, isEditing, todo }) => {
    const [isChecked, setIsChecked] = useState(todo.isChecked)
    const [isEditingState, setIsEdititingState] = useState(isEditing)
    const titleInputRef = useRef(null)

    let title = ""
    const titleInitValue = todo.title

    const saveTitle = (title) => {
        todo.title = title
    }
    
    const submitEditing = () => {
        if (!titleInputRef.current.value || titleInputRef.current.value[0] === " ") {
            alert("Title cannot be empty nor start with a space")
            todo.title = titleInitValue
        }
        setIsEdititingState(false)
        onItemEndEditing(todo)
    }

    useEffect(() => {
        if (isEditingState) {
            titleInputRef.current.focus()
            onItemBeginEditing(todo)
        }
    }, [isEditingState])

    useEffect(() => {
        setIsEdititingState(isEditing)
    }, [isEditing])

    if(isEditingState) {
        title = 
            <input 
                onKeyDown={(e) => e.key === "Enter" && submitEditing()}
                onBlur={() => submitEditing()}
                defaultValue={todo.title}
                onChange={(e) => {
                    saveTitle(e.target.value)
                }}
                ref={titleInputRef}
                className="edit_todo_title"
            >

            </input>
    } else {
        title = <p onClick={() => setIsEdititingState(!isEditingState)} 
            className={(!isChecked ? "text-slate-200" : "text-gray-500") + " todo_title"}>
            {todo.title}
        </p>
    }

    return (
        <div>
            <div className="flex justify-between my-3">
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
                            className="text-slate-200 cursor-pointer mx-3" />
                        : <MdOutlineRadioButtonChecked onClick={() => {
                            onItemChecked(todo) 
                            setIsChecked(!isChecked)
                            }
                        } 
                        size={15} 
                        className="text-slate-200 cursor-pointer mx-3" />
                    }
                    
                    <div className={(!isChecked ? "text-slate-200" : "text-slate-700") + " max-w-[175px] md:max-w-[300px] text-md break-words"}>
                        {title}
                    </div>
                    
                </div>
                <div className="flex items-center mx-4 gap-2">
                    <FiEdit onClick={() => isEditingState ? submitEditing() : setIsEdititingState(true)} onMouseDown={(e) => e.preventDefault()} size={15} className={(!isChecked ? "text-slate-200 cursor-pointer" : "text-gray-700 cursor-pointer")} />
                    <IoMdClose onClick={() => onItemDelete(todo)} size={15} className={!isChecked ? "text-slate-200 cursor-pointer" : "text-gray-700 cursor-pointer"} />
                </div>
            </div>
        </div>
    )
}

export default TodoListItem