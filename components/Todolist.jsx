import TodoListItem from "@/components/TodoListItem"

const TodoList = ({ onItemDelete, todos }) => {
    return (
        <div className="mt-6">
            {todos.map((todo) => (
                <TodoListItem onItemDelete={onItemDelete} key={todo.id} todo={todo} />
            ))}
        </div>
    );
}

export default TodoList