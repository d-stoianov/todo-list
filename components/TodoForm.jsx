"use client"

import { useState } from "react"
import TodoModel from "@/model/TodoModel"

const TodoForm = ({onCreateItem}) => {
    const [title, setTitle] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        if (title) {
            const todo = new TodoModel(null, title, false) 
            onCreateItem(todo)
        }
        setTitle("")
    }

    return (
        <form onSubmit={(event) => handleSubmit(event)} className="relative">
            <input
                value={title}
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