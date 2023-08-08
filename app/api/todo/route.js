import connectToDb from "@/utils/database"
import Todo from "@/models/todo"

export const GET = async (request) => {
    try {
        await connectToDb()

        const todos = await Todo.find({})

        return new Response(JSON.stringify(todos), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch todos", { status: 500 })
    }
}

export const POST = async (request) => {
    const { title, description, isChecked } = await request.json()
    try {
        await connectToDb()

        const newTodo = new Todo({ title, description, isChecked })
        await newTodo.save()

        return new Response(JSON.stringify(newTodo), { status: 200 })
    } catch (error) {
        return new Response("Failed to create a new todo", { status: 500 })
    }
}