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