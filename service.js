class Service {
    async getAllTodos() {
        const response = await fetch("/api/todo")
        const todos = await response.json()
        return todos
    }

    async createTodo(todo) {
        await fetch("/api/todo/", {
            method: "POST",
            body: JSON.stringify(todo)
        })
    }

    async deleteTodoById(todoId) {
        await fetch(`/api/todo/${todoId}`, {
            method: "DELETE",
        })
    }

    async toggleCheckTodoById(todoId) {
        const response = await fetch(`/api/todo/${todoId}`, {
            method: "GET"
        })
        const todo = await response.json()
        
        await fetch(`/api/todo/${todoId}`, {
            method: "PATCH",
            body: JSON.stringify({title: todo.title, description: todo.description, isChecked: !todo.isChecked})
        })
    }

    async replaceTodo(todo) {
        await fetch(`/api/todo/${todo._id}`, {
            method: "PATCH",
            body: JSON.stringify({title: todo.title, description: todo.description, isChecked: todo.isChecked})
        })
    }
}

export default Service