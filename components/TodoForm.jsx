"use client"

import { useState } from "react"

const TodoForm = ({onCreateItem}) => {
    const [title, setTitle] = useState("")

    const onEnterPress = (e) => {
        if (e.key == "Enter") {
            handleSubmit(e)
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (title) {
            const todo = { title: title}
            onCreateItem(todo)
        }
        setTitle("")
    }

    return (
        <form onSubmit={(event) => handleSubmit(event)} className="relative">
            <textarea
                maxLength={50}
                value={title}
                onKeyDown={onEnterPress}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                className="todo_input"
                placeholder="Add your todo text"
            />
            <button 
                className="add_todo"
            >
                Add
            </button>
        </form>
    )
}

export default TodoForm