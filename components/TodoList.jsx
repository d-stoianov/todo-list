"use client"

import TodoListItem from "@/components/TodoListItem"
import { useState } from "react"

const TodoList = ({ onItemDelete, onItemChecked, onItemEdited, todos }) => {
    const [currentTodo, setCurrentTodo] = useState(null)
    const onItemBeginEditing = (todo) => {
        setCurrentTodo(todo)
    }

    return (
        <div className="mt-6">
            {todos.map((todo, index) => {
                todo.id = (index * -1) - 1 // local id
                return (
                    <TodoListItem 
                        onItemDelete={onItemDelete} 
                        onItemChecked={onItemChecked} 
                        onItemEndEditing={onItemEdited}
                        onItemBeginEditing={onItemBeginEditing}
                        isEditing={currentTodo !== null && currentTodo._id === todo._id}
                        key={todo.id}
                        todo={todo} 
                    />
                )
            })}
        </div>
    );
}

export default TodoList
