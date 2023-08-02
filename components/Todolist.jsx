import Todo from "@/components/Todo"

const TodoList = ({ todos }) => {
    return (
        <div>
            {todos && todos.map((todo) => (
                <Todo todo={todo} />
            ))}
        </div>
    );
}

export default TodoList