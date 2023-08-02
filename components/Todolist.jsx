import Todo from "@/components/Todo"

const TodoList = ({ todos }) => {
    console.log(todos)
    return (
        <div className="mt-6">
            {todos.map((todo) => (
                <Todo key={todo.id} todo={todo} />
            ))}
        </div>
    );
}

export default TodoList