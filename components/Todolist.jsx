import TodoListItem from "@/components/TodoListItem"

const TodoList = ({ onItemDelete, onItemChecked, todos }) => {
    return (
        <div className="mt-6">
            {todos.map((todo) => (
                <TodoListItem 
                    onItemDelete={onItemDelete} 
                    onItemChecked={onItemChecked} 
                    key={todo.id} 
                    todo={todo} 
                />
            ))}
        </div>
    );
}

export default TodoList