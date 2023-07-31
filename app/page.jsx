"use client"

import { useState } from "react"

const Home = () => {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [todo, setTodo] = useState("")

    const createTodo = async (event) => {
        event.preventDefault()
        setIsSubmitting(true)
        console.log(todo)
        
        // make api request

        setIsSubmitting(false)
    }

    return (
        <main className="mt-12 flex flex-col items-center h-screen">
            <h1 className="text-center font-bold text-[32px] text-gray-200">
                Todo List
            </h1>
            <div className="mt-10">
                <form onSubmit={createTodo} className="relative">
                    <input
                        onChange={(e) => setTodo(e.target.value)}
                        type="text"
                        className="todo_input"
                        placeholder="Add your todo text"
                    />
                    <button 
                        className="add_todo"
                        disabled={isSubmitting}
                    >
                        Add
                    </button>
                </form>
            </div>
        </main>
    )
}

export default Home