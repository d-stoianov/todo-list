"use client"

import TodoList from "@/components/Todolist"
import { useEffect, useState } from "react"

const Home = () => {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [todo, setTodo] = useState("")
    const [todos, setTodos] = useState([])

    useEffect(() => {
        const loadTodos = () => {
            const loadedTodos = JSON.parse(localStorage.getItem("todos")) || [] // in case there are no todos
            setTodos(loadedTodos)
        }

        loadTodos()
    }, [])

    const createTodo = (event) => {
        event.preventDefault()
        setIsSubmitting(true)

        const newTodos = [todo, ...todos]
        setTodos(newTodos)

        localStorage.setItem("todos", JSON.stringify(newTodos))
        
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
                        value={todo}
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
                <TodoList todos={todos} />
            </div>
        </main>
    )
}

export default Home