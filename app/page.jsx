"use client"

import TodoForm from "@/components/TodoForm"
import TodoList from "@/components/Todolist"
import { useEffect, useState } from "react"

const Home = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        const loadTodos = () => {
            if (localStorage.getItem("todos")) {
                const loadedTodos = JSON.parse(localStorage.getItem("todos"))
                
                setTodos(loadedTodos)
            }
        }

        loadTodos()
    }, [])

    const saveTodo = (todo) => {
        const newTodos = [todo, ...todos]
        setTodos(newTodos)
        localStorage.setItem("todos", JSON.stringify(newTodos))
    }

    return (
        <main className="mt-12 flex flex-col items-center h-screen">
            <h1 className="text-center font-bold text-[32px] text-gray-200">
                Todo List
            </h1>
            <div className="mt-10">
                <TodoForm sendForm={saveTodo} />
                <TodoList todos={todos} />
            </div>
        </main>
    )
}

export default Home