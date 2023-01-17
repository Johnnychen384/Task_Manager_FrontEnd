import { useState, useEffect } from 'react'

const Task = (props) => {
    const [done, setDone] = useState(props.task.done)

    let finished = props.task.done ? "Finished" : "Not Finished"

    return(
        <a className="list-group-item list-group-item-action active py-3 lh-sm mb-1 rounded" aria-current="true">
            
            <div className="d-flex w-100 align-items-center justify-content-between">
                <div className="col-10 mb-4 small">{props.task.task_Description}</div>
            </div>

            <div className="d-flex w-100 align-items-center justify-content-between">
                <button className="w-50 btn btn-sm btn-light mt-2" onClick={() => {
                    setDone(prev => !prev)
                    props.finishedTask(props.task.id, done)
                }}>{finished}</button>

                <button className="w-25 btn btn-sm btn-light mt-2" onClick={() => {props.deleteTask(props.task.id)}}>Delete</button>
            </div>
        </a>
    )
}

export default Task