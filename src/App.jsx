import { useState } from 'react'
import './App.css'

import CreateTask from './components/CreateTask'
import TodoList from './components/TodoList'

function App() {
  console.log('render app')
  const [todoItems, setTodoItems] = useState([])

  return (
    <div className="App">

      <CreateTask onSubmit={setTodoItems}/>

      <div>
        <h1>Todo List</h1>
        <TodoList todoItems={todoItems} completedTodoList={false} onTodoItemUpdate={setTodoItems}/>
      </div>

      <div>
        <h1>Completed Tasks</h1>
        <TodoList todoItems={todoItems} completedTodoList={true} onTodoItemUpdate={setTodoItems}/>
      </div>

    </div>
  )
}

export default App