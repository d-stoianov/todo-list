import connectToDb from "@/utils/database"
import Todo from "@/models/todo"

export const GET = async (request, { params }) => {
    try {
        await connectToDb()

        const todo = await Todo.findById(params.id)

        return new Response(JSON.stringify(todo), { status: 200 })
    } catch (error) {
        return new Response("Failed to get todo", { status: 500 })
    }
}

export const PATCH = async (request, { params }) => {
    const { title, description, isChecked } = await request.json()

    try {
        await connectToDb()
        
        const existingTodo = await Todo.findById(params.id)

        if (!existingTodo) {
            return new Promise("Todo not found", { status: 404 })
        }

        existingTodo.title = title
        existingTodo.description = description
        existingTodo.isChecked = isChecked

        await existingTodo.save()

        return new Response("Todo has been updated", { status: 200 })
    } catch (error) {
        return new Response("Failed to update todo", { status: 500 })
    }
}

export const DELETE = async (request, { params }) => {
    try {
        await connectToDb()

        await Todo.findByIdAndDelete(params.id)

        return new Response("Todo has been deleted", { status: 200 })
    } catch (error) {
        return new Response("Failed to delete todo", { status: 500 })
    }
}