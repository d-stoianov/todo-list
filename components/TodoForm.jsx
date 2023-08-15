"use client"

import { useState } from "react"
import { useSession } from "next-auth/react"

const TodoForm = ({onCreateItem}) => {
    const [title, setTitle] = useState("")
    const { data: session } = useSession()

    const onEnterPress = (e) => {
        if (e.key == "Enter") {
            handleSubmit(e)
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if (!session?.user.id) {
            alert("You have to sign in first")
            return
        }

        if (!title || title[0] === " ") {
            alert("Title cannot be empty nor start with a space")
        } else {
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