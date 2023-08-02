"use client"

import { useState } from "react"

const TodoForm = ({sendForm}) => {
    const [input, setInput] = useState("")

    const genId = () => {
        return Math.floor(Math.random() * 1000)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (input) {
            sendForm({text: input, id: genId()})
        }
        setInput("")
    }

    return (
        <form onSubmit={(event) => handleSubmit(event)} className="relative">
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
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