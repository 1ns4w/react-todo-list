const TodoItem = ({title, description, isCompleted, index, todoItems, onTodoItemUpdate})=>{

    console.log('todo item')

    const _handleOnClick = (index) => {
        todoItems.splice(index, 1)
        onTodoItemUpdate([...todoItems])
    }

    const _handleChangeTitle = event => {
        todoItems[index].title = event.target.value
        onTodoItemUpdate([...todoItems])
    }

    const _handleChangeDescripton = event => {
        todoItems[index].description = event.target.value
        onTodoItemUpdate([...todoItems])
    }
    
    const _handleChangeIsCompleted = event => {
        todoItems[index].isCompleted = event.target.checked
        onTodoItemUpdate([...todoItems])
    }

    return (
        <div>
            <input type='text' onInput={_handleChangeTitle} value={title}/>
            <input type='text' onInput={_handleChangeDescripton} value={description}/>
            <input type='checkbox' onChange={(_handleChangeIsCompleted)} checked={isCompleted}/>
            <button onClick={() => (_handleOnClick(index))}>Delete</button>
        </div>
    )
}

export default TodoItem