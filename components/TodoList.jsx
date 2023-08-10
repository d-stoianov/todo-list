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
            {todos.map((todo) => (
                <TodoListItem 
                    onItemDelete={onItemDelete} 
                    onItemChecked={onItemChecked} 
                    onItemEndEditing={onItemEdited}
                    onItemBeginEditing={onItemBeginEditing}
                    isEditing={currentTodo !== null && currentTodo._id === todo._id}
                    key={todo._id} 
                    todo={todo} 
                />
            ))}
        </div>
    );
}

export default TodoList
