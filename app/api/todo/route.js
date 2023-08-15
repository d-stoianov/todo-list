import connectToDb from "@/utils/database"
import Todo from "@/models/todo"
import { getServerSession } from "next-auth/next"
import authOptions from "@/app/api/auth/[...nextauth]/authOptions"

export const GET = async (request) => {
    try {
        const session = await getServerSession(authOptions)
        const userId = session.user.id

        await connectToDb()

        const todos = await Todo.find({creator: userId})

        return new Response(JSON.stringify(todos), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch todos", { status: 500 })
    }
}

export const POST = async (request) => {
    const { title, description, isChecked } = await request.json()
    try {
        const session = await getServerSession(authOptions)
        const userId = session.user.id

        await connectToDb()

        const newTodo = new Todo({ title, description, isChecked, creator: userId })
        await newTodo.save()

        return new Response(JSON.stringify(newTodo), { status: 200 })
    } catch (error) {
        return new Response("Failed to create a new todo", { status: 500 })
    }
}