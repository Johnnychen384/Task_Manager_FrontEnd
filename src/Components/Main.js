import Task from './Task'
import AddTask from './AddTask'
import { useState, useEffect } from 'react'
import axios from 'axios'


const Main = (props) => {
    const [tasks, setTasks] = useState([])

    const getAllUserTasks = () => {
        if(props.user && props.user.id) {
            axios.get('https://floating-escarpment-86191.herokuapp.com/api/task/' + props.user.id).then((res) => {
              setTasks(res.data)
            })
        } else {
            console.log('User or user id not defined')
        }
    }

    const addTask = (data) => {
        if(props.user && props.user.id) {
            axios.post('https://floating-escarpment-86191.herokuapp.com/api/task/' + props.user.id, data).then((res) => {
                getAllUserTasks()
            })
        } else {
            console.log('User or user id not defined')
        }
        
    }

    const deleteTask = (id) => {
        if(props.user && props.user.id) {
            axios.delete('https://floating-escarpment-86191.herokuapp.com/api/task/' + id).then((res) => {
                getAllUserTasks()
            })
        } else {
            console.log('User or user id not defined')
        }
    }

    const finishedTask = (id, done) => {
        if(props.user && props.user.id) {
            axios.put(`https://floating-escarpment-86191.herokuapp.com/api/task/${id}?done=${done}`).then((res) => {
                getAllUserTasks()
            })
        } else {
            console.log('User or user id not defined')
        }
    }


    useEffect(() => {
        if(props.user && props.user.id){
            getAllUserTasks()
        }
    }, [props.user])

    const allTasks = tasks.map(task => <Task key={task.id} task={task} deleteTask={deleteTask} finishedTask={finishedTask}/>)

    return(
        <div className="w-100 d-flex justify-content-between">

            {/* Task Side Bar */}
            <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white overflow-auto maintask mx-2">
                <a className="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom">
                    <span className="fs-5 fw-semibold mx-auto">List Of Tasks</span>
                </a>

                <div className="list-group list-group-flush border-bottom scrollarea">
                    {allTasks}
                </div>
            </div>



            <AddTask addTask={addTask}/>
        </div>
    )
}


export default Main