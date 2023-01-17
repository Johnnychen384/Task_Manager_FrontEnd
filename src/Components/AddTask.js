import React, { useState } from 'react'

const AddTask = (props) => {

    const [task, setTask] = useState({ task_Description: '', done: false })

    const handleChange = (event) => {
        setTask({ ...task, [event.target.name]: event.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addTask(task)
        setTask({ task_Description: '', done: false })
    }

    return (
        <main className="form-signin w-100 mt-5">
            <form onSubmit={handleSubmit}>
                <h1 className="h3 fw-normal">Add a Task</h1>

                <div className="form-floating w-75 mx-auto">
                    <input type="text" className="form-control" id="floatingInput" name="task_Description" value={task.task_Description} onChange={handleChange}/>
                    <label htmlFor="floatingInput">Task</label>
                </div>

                
                <button className="w-50 btn btn-lg btn-primary mt-2" type="submit">Add Task</button>

            </form>
        </main>
    )
}

export default AddTask