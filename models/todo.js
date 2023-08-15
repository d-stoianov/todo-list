import { Schema, model, models } from "mongoose"

const TodoSchema = new Schema({
    title: {
        type: Schema.Types.String,
        required: [true, "Title is required"]
    },
    description: {
        type: Schema.Types.String
    },
    isChecked: {
        type: Schema.Types.Boolean,
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})

const Todo = models.Todo || model("Todo", TodoSchema)

export default Todo