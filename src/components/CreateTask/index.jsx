import { useRef } from "react"

const CreateTask = ({onSubmit})=>{
    const titleRef = useRef()
    const descriptionRef = useRef()

    const _handleOnClick = ()=>{
        const newTask = {
            title: titleRef.current.value,
            description: descriptionRef.current.value,
            isCompleted: false
        }
        
        onSubmit(prev => [...prev, newTask])
        titleRef.current.value = descriptionRef.current.value = ''

    }
    return (
        <div>
            <h1>Create Task</h1>
            <input type='text' ref={titleRef}/>
            <input type='text' ref={descriptionRef}/>
            <button onClick={_handleOnClick} >Add</button>
        </div>
    )
}

export default CreateTask