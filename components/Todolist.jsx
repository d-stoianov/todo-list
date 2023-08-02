import Todo from "@/components/Todo"

const TodoList = ({ todos }) => {
    return (
        <div className="mt-6">
            {todos && todos.map((todo) => (
                <Todo todo={todo} />
            ))}
        </div>
    );
}

export default TodoList