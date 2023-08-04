"use client"

import { useEffect, useState } from "react"
import { IoMdClose } from "react-icons/io"

const TodoEditModal = ({ todo, setShowModal, onItemEdited}) => {
    const [title, setTitle] = useState(todo.title)
    const [text, setText] = useState(todo.text)

    useEffect(() => {
        todo.title = title
        todo.text = text
    }, [title, text])
    
    return (
        <div className="modal">
            <div className="modal_content">
                <IoMdClose
                    onClick={() => {
                        onItemEdited(todo)
                        setShowModal(false)
                    }}
                    size={15}
                    className="float-right cursor-pointer text-slate-800 hover:text-white" 
                />
                <div className="flex flex-col gap-3 md:gap-5 mt-5 items-center">
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="todo_title"></input>
                    <textarea
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder='Your Todo Text'
                        className="todo_text" 
                    />
                </div>
            </div>
        </div>
    )
}

export default TodoEditModal