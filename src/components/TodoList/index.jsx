import TodoItem from "../TodoItem";

const TodoList = ({todoItems, completedTodoList, onTodoItemUpdate}) => {
    return (
        <div>
            {todoItems.map(({title, description, isCompleted}, index) => 
            isCompleted === completedTodoList && (
                <TodoItem 
                    title={title}
                    description={description}
                    isCompleted={isCompleted}
                    index={index}
                    todoItems={todoItems}
                    onTodoItemUpdate={onTodoItemUpdate}
                    key={index + 1}
                />
            ))}
        </div>
    )
}

export default TodoList;