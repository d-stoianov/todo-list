import connectToDb from "@/utils/database"
import Todo from "@/models/todo"

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