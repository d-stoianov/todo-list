import connectToDb from "@/utils/database"
import Todo from "@/models/todo"
import { getServerSession } from "next-auth/next"
import authOptions from "@/app/api/auth/[...nextauth]/authOptions"

export const GET = async (request, { params }) => {
    try {
        const session = await getServerSession(authOptions)
        const userId = session.user.id

        await connectToDb()

        const todo = await Todo.findById(params.id)

        if (!todo.creator.equals(userId)) {
            return new Response("Access denied", { status: 403 })
        }

        return new Response(JSON.stringify(todo), { status: 200 })
    } catch (error) {
        return new Response("Failed to get todo", { status: 500 })
    }
}

export const PATCH = async (request, { params }) => {
    const { title, description, isChecked } = await request.json()

    try {
        const session = await getServerSession(authOptions)
        const userId = session.user.id

        await connectToDb()
        
        const todo = await Todo.findById(params.id)

        if (!todo.creator.equals(userId)) {
            return new Response("Access denied", { status: 403 })
        }

        if (!todo) {
            return new Promise("Todo not found", { status: 404 })
        }

        todo.title = title
        todo.description = description
        todo.isChecked = isChecked

        await todo.save()

        return new Response("Todo has been updated", { status: 200 })
    } catch (error) {
        return new Response("Failed to update todo", { status: 500 })
    }
}

export const DELETE = async (request, { params }) => {
    try {
        const session = await getServerSession(authOptions)
        const userId = session.user.id

        await connectToDb()

        const todo = await Todo.findById(params.id)

        if (!todo.creator.equals(userId)) {
            return new Response("Access denied", { status: 403 })
        }

        await Todo.deleteOne(todo)

        return new Response("Todo has been deleted", { status: 200 })
    } catch (error) {
        return new Response("Failed to delete todo", { status: 500 })
    }
}