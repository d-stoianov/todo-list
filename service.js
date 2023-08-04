class Service {
    async getAllTodos() {
        return JSON.parse(localStorage.getItem("todos")) ?? [] // if no data return empty array
    }

    async createTodo(todo) {
        const todos = await this.getAllTodos()
        let id = 0
        if(todos.length > 0) {
            const firstTodo = todos[0]
            id = firstTodo.id + 1
        }
        todo.id = id
        localStorage.setItem("todos", JSON.stringify([todo, ...todos]))
    }

    async deleteTodoById(todoId) {
        const todos = await this.getAllTodos()
        const index = todos.findIndex((todo) => {
            return todoId === todo.id
        })
        if (index >= 0) {
            todos.splice(index, 1)
            localStorage.setItem("todos", JSON.stringify(todos))
        }
    }

    async toggleCheckTodoById(todoId) {
        const todos = await this.getAllTodos()
        const index = todos.findIndex((todo) => {
            return todoId === todo.id
        })
        if (index >= 0) {
            todos[index].isChecked = !todos[index].isChecked
            localStorage.setItem("todos", JSON.stringify(todos))
        }
    }
}

export default Service