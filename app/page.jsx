"use client"

import Service from "@/service"
import TodoForm from "@/components/TodoForm"
import TodoList from "@/components/TodoList"
import { useEffect, useState } from "react"

const Home = () => {
    const [todos, setTodos] = useState([])

    const service = new Service()

    useEffect(() => {
      service.getAllTodos()
      .then(res => setTodos(res))
      .catch(err => console.log("err: ", err))
    }, [])

    const saveTodo = (todo) => {
        service.createTodo(todo)
        .then(() => service.getAllTodos())
        .then(res => setTodos(res))
        .catch(err => console.log(err))
    }

    }

    return (
        <main className="mt-12 flex flex-col items-center h-screen">
            <h1 className="text-center font-bold text-[32px] text-gray-200">
                Todo List
            </h1>
            <div className="mt-10">
                <TodoForm onCreateItem={saveTodo} />
            </div>
        </main>
    )
}

export default Home