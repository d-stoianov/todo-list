"use client"

import Service from "@/service"
import TodoForm from "@/components/TodoForm"
import TodoList from "@/components/TodoList"
import Loading from "@/components/loading"
import { useEffect, useState } from "react"

const Home = () => {
    const [todos, setTodos] = useState([])
    const [isLoading, setisLoading] = useState(true)

    const service = new Service()

    useEffect(() => {
        service.getAllTodos()
        .then(res => setTodos(res))
        .catch(err => console.log("err: ", err))
        .finally(() => setisLoading(false))
    }, [])

    const saveTodo = (todo) => {
        service.createTodo(todo)
        .then(() => service.getAllTodos())
        .then(res => setTodos(res))
        .catch(err => console.log(err))
    }

    const onItemDelete = (todo) => {
        service.deleteTodoById(todo._id)
        .then(() => service.getAllTodos())
        .then(res => setTodos(res))
        .catch(err => console.log(err))
    }

    const onItemChecked = (todo) => {
        service.toggleCheckTodoById(todo._id)
        .then(() => service.getAllTodos())
        .then(res => setTodos(res))
        .catch(err => console.log(err))
    }

    const onItemEdited = (todo) => {
        if (!todo.title.length <= 0) { // title cannot be empty
            service.replaceTodo(todo)
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
                {isLoading ?
                    <div className="w-full mt-10 flex justify-center items-center">
                        <Loading />
                    </div>
                    :
                    <TodoList
                        onItemDelete={onItemDelete}
                        onItemChecked={onItemChecked}
                        onItemEdited={onItemEdited}
                        todos={todos}
                    />
                }
            </div>
        </main>
    )
}

export default Home